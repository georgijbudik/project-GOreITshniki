import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import * as yup from 'yup';
import {
  ContainerInput,
  ContainerShowButton,
  Error,
  Forma,
  Input,
  ShowPassButton,
} from '../../SignUp/SignUpForm/SignUpForm.styled';
import AuthButton from 'pages/SignUp/SignAuthButton';
import { useState } from 'react';
// import toast from 'react-hot-toast';

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
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    // const promise = dispatch(logIn({ email, password }));
    // toast.promise(
    //   promise,
    //   {
    //     success: `${email}, you were successfully login`,
    //     error: 'Something went wrong. Try again...',
    //     loading: 'Logining...',
    //   },
    //   {
    //     duration: 2000,
    //     icon: '🏋️‍♀️',
    //     style: {
    //       borderRadius: '10px',
    //       background: '#333',
    //       color: '#fff',
    //     },
    //   }
    // );
    // toast.success(`You are registered 🤗`, {
    //   duration: 3000,
    //   position: 'top-right',
    // });
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
              placeholder="Email"
            />
            <Error name="email" component="div" />
            <ContainerShowButton> 
        <ShowPassButton type="button" onClick={() =>
                                            setShowPassword(showPassword => !showPassword)
                                          }>{showPassword ?         <svg  width="24" height="24">
                                          <use xlinkHref={
                                                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-visible'
                                              }></use>
                                        </svg>
                                                         : 
                                                                                    <svg  width="24" height="24">
                                          <use xlinkHref={
                                                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-unvisible'
                                              }></use>
                                        </svg>
                                          }</ShowPassButton>
                          
                                                <Input
             type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              minLength="6"
            />
              </ContainerShowButton>
            <Error name="password" component="div" />
          </ContainerInput>
          <AuthButton type="submit">Sign In</AuthButton>
        </Forma>
      </Formik>
    </>
  );
};

export default SignInForm;
