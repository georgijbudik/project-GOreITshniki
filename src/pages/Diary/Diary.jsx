import React from 'react';
// import MainContainer from '../../components/MainContainer';
import TitlePage from '../../components/TitlePage';
import DayDashboard from './DayDashboard';
import DaySwitch from './DaySwitch';
import DayProducts from './DayProducts';
import DayExercises from './DayExercises';
import { PageTitle, DaySwitchRight } from './Diary.styled';

const Diary = () => {
  return (
    <>
      <PageTitle>
        <TitlePage>Diary</TitlePage>
        <DaySwitchRight>
          <DaySwitch>DaySwitch</DaySwitch>
        </DaySwitchRight>
      </PageTitle>
      <DayDashboard>DayDashboard</DayDashboard>
      <DayProducts>DayProducts</DayProducts>
      <DayExercises>DayExercises</DayExercises>
    </>
  );
};

export default Diary;
