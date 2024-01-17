import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import * as yup from 'yup';
import {
  ContainerInput,
  Error,
  Forma,
  Input,
  StyledAuthButton,
} from './SignUpForm.styled';
import Button from 'components/Button';
import AuthButton from '../SignAuthButton';

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
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    //dispatch(register({ name, email, password }));
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
            <Input
              type="password"
              name="password"
              placeholder="Password"
              minLength="6"
            />
            <Error name="password" component="div" />
          </ContainerInput>
          <AuthButton type="submit">Sign Up</AuthButton>
        </Forma>
      </Formik>
    </>
  );
};

export default SignUpForm;
