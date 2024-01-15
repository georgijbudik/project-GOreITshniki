import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';

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
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <Field type="email" name="email" placeholder="Email" />
            {/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}
            <ErrorMessage name="email" component="div" />

            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />

            <button type="submit">Sign In</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignInForm;
