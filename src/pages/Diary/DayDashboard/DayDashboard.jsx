import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDayInfo } from '../../../redux/diary/diaryOperations';
import dayjs from 'dayjs';
import {
  selectUserInfo,
  selectIsFetching,
} from '../../../redux/auth/authSelectors';
// import { useSelector } from 'react-redux';

import {
  DailyCalorieIntake,
  CellHeader,
  DashBoardElementPic,
  CelName,
  CelValue,
  DailyCalorieIntakeWrapper,
  ProcessedDashboardDataWrapper,
  ProcessedDashboardData,
  ProcessedDashboardDataMarked,
  AttentionText,
  AttentionPic,
  AttentionMessage,
  CelNameBottom,
  Metawrap,
  DshbrdWrpr,
} from './DayDashboard.styled';

const DayDashboard = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const dayInfo = useSelector(state => state.dayInfo);
  const isFetching = useSelector(selectIsFetching);
  const currentDate = dayjs();
  const date = dayjs(currentDate).format('DD.MM.YYYY');
  console.log('=== state === ', dayInfo);

  useEffect(() => {
    dispatch(getDayInfo(date))
      .then(result => {
        // Вивести отримані дані в консоль
        console.log('Отримані дані:', result);
      })
      .catch(error => {
        // Обробка помилок, якщо такі є
        console.error('Помилка при отриманні даних:', error);
      });
  }, [dispatch, date]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const totalCalories = userInfo.calories;
  const caloriesConsumed = 2000;
  const caloriesRemaining = totalCalories - caloriesConsumed;

  const caloriesBurned = 1;

  return (
    <>
      <Metawrap>
        <DshbrdWrpr>
          <DailyCalorieIntakeWrapper>
            <DailyCalorieIntake>
              <CellHeader>
                <DashBoardElementPic>
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-fluent_food-24-filled_OMG'
                    }
                  />
                </DashBoardElementPic>

                <CelName>Daily calorie intake</CelName>
              </CellHeader>
              <CelValue>{totalCalories}</CelValue>
            </DailyCalorieIntake>

            <DailyCalorieIntake>
              <CellHeader>
                <DashBoardElementPic>
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-dumbbell'
                    }
                  />
                </DashBoardElementPic>
                <CelName>Daily physical activity</CelName>
              </CellHeader>
              <CelValue>110 min</CelValue>
            </DailyCalorieIntake>
          </DailyCalorieIntakeWrapper>
          <ProcessedDashboardDataWrapper>
            <ProcessedDashboardData>
              <CellHeader>
                <DashBoardElementPic>
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-apple'
                    }
                  />
                </DashBoardElementPic>
                <CelNameBottom> Сalories consumed</CelNameBottom>
              </CellHeader>
              <CelValue>{caloriesConsumed}</CelValue>
            </ProcessedDashboardData>
            <ProcessedDashboardData>
              <CellHeader>
                <DashBoardElementPic>
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-calories-1_OMG'
                    }
                  />
                </DashBoardElementPic>
                <CelNameBottom>Сalories burned</CelNameBottom>
              </CellHeader>
              <CelValue>{caloriesBurned}</CelValue>
            </ProcessedDashboardData>
          </ProcessedDashboardDataWrapper>

          <ProcessedDashboardDataWrapper>
            <ProcessedDashboardDataMarked $markering={caloriesRemaining}>
              <CellHeader>
                <DashBoardElementPic>
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-bubble'
                    }
                  />
                </DashBoardElementPic>
                <CelNameBottom>Calories remaining</CelNameBottom>
              </CellHeader>
              <CelValue>{caloriesRemaining}</CelValue>
            </ProcessedDashboardDataMarked>

            <ProcessedDashboardData>
              <CellHeader>
                <DashBoardElementPic>
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-running-stick-figure-svgrepo-com_OMG'
                    }
                  />
                </DashBoardElementPic>
                <CelNameBottom>Sports remaining</CelNameBottom>
              </CellHeader>
              <CelValue>1 min</CelValue>
            </ProcessedDashboardData>
          </ProcessedDashboardDataWrapper>
        </DshbrdWrpr>
        <AttentionMessage>
          <AttentionPic>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-Attention1'
              }
            />
          </AttentionPic>
          <AttentionText>
            Record all your meals in the calorie diary every day. This will help
            you be aware of your nutrition and make informed choices.
          </AttentionText>
        </AttentionMessage>
      </Metawrap>
    </>
  );
};

export default DayDashboard;
