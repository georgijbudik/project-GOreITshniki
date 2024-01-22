import React from 'react';
// import MainContainer from '../../components/MainContainer';
import TitlePage from '../../components/TitlePage';
import DayDashboard from './DayDashboard';
import DaySwitch from './DaySwitch';
import DayProducts from './DayProducts';
import DayExercises from './DayExercises';
import {
  PageTitle,
  DaySwitchRight,
  Wrap,
  MediaWrapper,
  MediaWrapDayDashBoard,
} from './Diary.styled';

const Diary = () => {
  return (
    <Wrap>
      <PageTitle>
        <TitlePage>Diary</TitlePage>
        <DaySwitchRight>
          <DaySwitch>DaySwitch</DaySwitch>
        </DaySwitchRight>
      </PageTitle>
      <MediaWrapper>
        <MediaWrapDayDashBoard>
          <DayDashboard>DayDashboard</DayDashboard>
        </MediaWrapDayDashBoard>
        <div>
          <DayProducts>DayProducts</DayProducts>
          <DayExercises>DayExercises</DayExercises>
        </div>
      </MediaWrapper>
    </Wrap>
  );
};

export default Diary;
