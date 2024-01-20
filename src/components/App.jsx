import { Route, Routes, Navigate, useLocation } from 'react-router';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { refreshUser } from '../redux/auth/authOperations';

import Welcome from 'pages/Welcome/Welcome';
import SignUp from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';
import Profile from 'pages/Profile/Profile';
import Diary from 'pages/Diary/Diary';
import Products from 'pages/Products/Products';
import Exercises from 'pages/Exercises/Exercises';
import ExercisesList from 'pages/Exercises/ExercisesList';
import Error from 'pages/Error/Error';
import SharedLayout from 'pages/Shared/SharedLayout';
import BodyParts from 'pages/Exercises/BodyParts';
import Muscles from 'pages/Exercises/Muscles';
import Equipment from 'pages/Exercises/Equipment';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
// import PrivateRoute from '../routes/PrivateRoute';

export const App = () => {
  const location = useLocation();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  if (location.pathname === '/exercises') {
    return <Navigate to="/exercises/bodyparts" />;
  }

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Welcome />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute restricted>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute restricted>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="diary" element={<Diary />} />
        <Route path="products" element={<Products />} />

        <Route
          path="exercises"
          element={
            <PrivateRoute>
              <Exercises />
            </PrivateRoute>
          }
        >
          <Route path="bodyparts" element={<BodyParts />} />
          <Route path="muscles" element={<Muscles />} />
          <Route path="equipment" element={<Equipment />} />
        </Route>
        <Route
          path="/exercises/:filter/:id"
          element={
            <PrivateRoute>
              <ExercisesList />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
