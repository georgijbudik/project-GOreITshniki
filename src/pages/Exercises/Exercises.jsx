import React from 'react';
import ExercisesCategories from './ExercisesCategories';
import { Outlet } from 'react-router';

const Exercises = () => {
  return (
    <div>
      <ExercisesCategories />
      <Outlet />
    </div>
  );
};

export default Exercises;
