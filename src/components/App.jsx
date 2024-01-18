// import { Route, Routes } from 'react-router';
import { Route, Routes, Navigate, useLocation } from 'react-router';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';
import Welcome from 'pages/Welcome/Welcome';
import SignUp from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';
import Profile from 'pages/Profile/Profile';
import Diary from 'pages/Diary/Diary';
import Products from 'pages/Products/Products';
import Exercises from 'pages/Exercises/Exercises';
// import ExercisesSubcategoriesList from 'pages/Exercises/ExercisesSubcategoriesList';
import ExercisesList from 'pages/Exercises/ExercisesList';
import Error from 'pages/Error/Error';
import SharedLayout from 'pages/Shared/SharedLayout';

import BodyParts from 'pages/Exercises/BodyParts';
import Muscles from 'pages/Exercises/Muscles';
import Equipment from 'pages/Exercises/Equipment';

export const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (location.pathname === '/exercises') {
    return <Navigate to="/exercises/bodyparts" />;
  }

  return (
    // <Routes>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Welcome />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="diary" element={<Diary />} />
        <Route path="products" element={<Products />} />
        {/* <Route path="exercises" element={<Exercises />}>
          <Route path="bodyparts" element={<ExercisesSubcategoriesList />} />
          <Route path="bodyparts/:category" element={<ExercisesList />} />
          <Route path="muscles" element={<ExercisesSubcategoriesList />} />
          <Route path="muscles/:category" element={<ExercisesList />} />
          <Route path="equipment" element={<ExercisesSubcategoriesList />} />
          <Route path="equipment/:category" element={<ExercisesList />} />
        </Route> */}

        <Route path="exercises" element={<Exercises />}>
          <Route path="bodyparts" element={<BodyParts />} />
          <Route path="muscles" element={<Muscles />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="/exercises/:filter/:id" element={<ExercisesList />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
