import { Outlet } from 'react-router';

import SectionTemplate from './SectionTemplate';
import ExercisesCategories from './ExercisesCategories';

const Exercises = () => {
  return (
    <SectionTemplate>
      <ExercisesCategories />
      {/* <m_o_d_a_l /> */}
      <Outlet />
    </SectionTemplate>
  );
};

export default Exercises;
