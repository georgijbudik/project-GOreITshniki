import { Route, Routes, Navigate, useLocation } from 'react-router';

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
import ExercisesSubcategoriesList from 'pages/Exercises/ExercisesSubcategoriesList';

import PublicRoute from 'routes/PublicRoute';

import PrivateRoute from 'routes/PrivateRoute';

export const App = () => {
  const location = useLocation();

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
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="diary"
          element={
            <PrivateRoute>
              <Diary />
            </PrivateRoute>
          }
        />
        <Route
          path="products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />

        <Route
          path="exercises"
          element={
            <PrivateRoute>
              <Exercises />
            </PrivateRoute>
          }
        >
          <Route path=":type" element={<ExercisesSubcategoriesList />} />
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
