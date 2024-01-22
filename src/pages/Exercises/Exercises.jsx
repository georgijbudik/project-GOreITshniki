import { useDispatch } from 'react-redux';
// import { refreshUser } from '../../redux/auth/authOperations';
import { useEffect } from 'react';
import { getExercisesByType } from '../../redux/exercises/exerciseOperations';
import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router';

import { useSelector } from 'react-redux';
import Loader from 'components/Loader';
import SectionTemplate from './SectionTemplate';
import ExercisesCategories from './ExercisesCategories';

const Exercises = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { isLoading } = useSelector(state => state.exercises);

  const type = pathname.split('/exercises/')[1];
  // console.log('type', type);

  useEffect(() => {
    dispatch(getExercisesByType(type));
  }, [dispatch, type]);

  return (
    <SectionTemplate>
      {isLoading && <Loader />}
      <ExercisesCategories />
      {/* <m_o_d_a_l /> */}
      <Outlet />
    </SectionTemplate>
  );
};

export default Exercises;
