import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import * as yup from 'yup';
import {
  ContainerInput,
  ContainerShowButton,
  Error,
  Forma,
  Input,
  ShowPassButton,
} from './SignUpForm.styled';
import AuthButton from '../SignAuthButton';
import { useState } from 'react';
import { StyledLogOutBtnIcon } from 'components/LogOutBtn/LogOutBtn.styled';
// import toast from 'react-hot-toast';

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
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    // const promise = dispatch(register({ name, email, password }));
    // toast.promise(
    //   promise,
    //   {
    //     success: `${name}, you were successfully registrated`,
    //     error: 'Something went wrong. Try again...',
    //     loading: 'Registration...',
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
            <Input type="text" name="name" placeholder="Name" minLength="2" />
            <Error name="name" component="div" />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              required
            />
            <Error name="email" component="div" />
        <ContainerShowButton> 
        <ShowPassButton id="pass" type="button" onClick={() =>
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
          <AuthButton >Sign Up</AuthButton>
        </Forma>
      </Formik>
    </>
  );
};

export default SignUpForm;
