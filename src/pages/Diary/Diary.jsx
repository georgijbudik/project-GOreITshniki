import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getDayInfo } from '../../redux/diary/diaryOperations';

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
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDayInfo('01.01.2024'));
  // }, [dispatch]);
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
