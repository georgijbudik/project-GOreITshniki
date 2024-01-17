import {
  DailyCalorieIntake,
  CelName,
  CelValue,
  DailyCalorieIntakeWrapper,
} from './DayDashboard.styled';

const DayDashboard = () => {
  return (
    <DailyCalorieIntakeWrapper>
      <DailyCalorieIntake>
        <CelName>Daily calorie intake</CelName>
        <CelValue>2200</CelValue>
      </DailyCalorieIntake>
      <DailyCalorieIntake>
        <CelName>Daily physical activity</CelName>
        <CelValue>110 min</CelValue>
      </DailyCalorieIntake>
    </DailyCalorieIntakeWrapper>
  );
};

export default DayDashboard;
