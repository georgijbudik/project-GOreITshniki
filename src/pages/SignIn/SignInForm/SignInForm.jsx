import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { logIn } from '../../../redux/auth/authOperations';
import * as yup from 'yup';
import {
  ContainerInput,
  ContainerShowButton,
  Error,
  Forma,
  Input,
  ShowPassButton,
  ShowPassSVG,
} from '../../SignUp/SignUpForm/SignUpForm/SignUpForm.styled';
import AuthButton from 'pages/SignUp/SignUpForm/AuthButton/AuthButton';
import { useState } from 'react';

const schema = yup.object().shape({
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
  email: '',
  password: '',
};

const SignInForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
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
              type="email"
              name="email"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              required
              placeholder={t('sign_in.email')}
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
                placeholder={t('sign_in.password')}
                minLength="6"
              />
            </ContainerShowButton>
            <Error name="password" component="div" />
          </ContainerInput>
          <AuthButton type="submit">{t('sign_in.button')}</AuthButton>
        </Forma>
      </Formik>
    </>
  );
};

export default SignInForm;
