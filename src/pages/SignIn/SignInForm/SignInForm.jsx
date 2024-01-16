import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import * as yup from 'yup';
import { Error, Forma, Input } from '../../SignUp/SignUpForm/SignUpForm.styled';
import Button from 'components/Button';

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
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <div>
            <Input
              type="email"
              name="email"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
              required
              placeholder="Email"
            />
            <Error name="email" component="div" />
            <Input
              type="password"
              placeholder="Password"
              minlength="6"
              name="password"
              placeholder="Password"
            />
            <Error name="password" component="div" />
          </div>
          <Button type="submit">Sign In</Button>
        </Forma>
      </Formik>
    </>
  );
};

export default SignInForm;
