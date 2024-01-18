import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { register } from '../../../redux/auth/authOperations';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContainerInput,
  ContainerShowButton,
  Error,
  Forma,
  Input,
  ShowPassSVG,
  ShowPassButton,
} from './SignUpForm.styled';
import AuthButton from './AuthButton';

const schema = yup.object().shape({
  name: yup.string().min(2).required('Name is required'),
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Is not in correct format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('No password provided.'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Forma autoComplete="off">
          <ContainerInput>
            <Input
              type="text"
              name="name"
              placeholder={t('sign_up.name')}
              minLength="2"
            />
            <Error name="name" component="div" />
            <Input
              type="email"
              name="email"
              placeholder={t('sign_up.email')}
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              required
            />
            <Error name="email" component="div" />
            <ContainerShowButton>
              <ShowPassButton
                type="button"
                onClick={() => setShowPassword(showPassword => !showPassword)}
              >
                {showPassword ? (
                  <ShowPassSVG width="24" height="24">
                    <use
                      xlinkHref={
                        process.env.PUBLIC_URL +
                        '/images/sprite/sprite.svg#icon-visible'
                      }
                    ></use>
                  </ShowPassSVG>
                ) : (
                  <ShowPassSVG width="24" height="24">
                    <use
                      xlinkHref={
                        process.env.PUBLIC_URL +
                        '/images/sprite/sprite.svg#icon-unvisible'
                      }
                    ></use>
                  </ShowPassSVG>
                )}
              </ShowPassButton>

              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder={t('sign_up.password')}
                minLength="6"
              />
            </ContainerShowButton>
            <Error name="password" component="div" />
          </ContainerInput>
          <AuthButton>{t('sign_up.button')}</AuthButton>
        </Forma>
      </Formik>
    </>
  );
};

export default SignUpForm;
