import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDayInfo } from '../../../redux/diary/diaryOperations';
import {
  selectDiaryDate,
  selectConsumedCalories,
  selectSportSeconds,
  selectBurnedCalories,
} from '../../../redux/diary/diarySelectors';
// import dayjs from 'dayjs';
import { selectUserInfo } from '../../../redux/auth/authSelectors';
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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const date = useSelector(selectDiaryDate);

  const consumedCalories = useSelector(selectConsumedCalories);
  const burnedCalories = useSelector(selectBurnedCalories);
  const sportSeconds = useSelector(selectSportSeconds);

  // const dayInfo = useSelector(state => state.dayInfo);
  // const currentDate = dayjs();
  // const date = dayjs(currentDate).format('DD.MM.YYYY');
  // console.log('=== state === ', dayInfo);

  const totalCalories = userInfo.calories;
  const caloriesRemaining =
    consumedCalories > totalCalories
      ? 0
      : Math.round(totalCalories - consumedCalories);
  const sportRemaining = (110 - sportSeconds / 60).toFixed();

  useEffect(() => {
    dispatch(getDayInfo(date));
    // .then(result => {
    //   // Вивести отримані дані в консоль
    //   console.log('Отримані дані:', result);
    // })
    // .catch(error => {
    //   // Обробка помилок, якщо такі є
    //   console.error('Помилка при отриманні даних:', error);
    // });
  }, [dispatch, date]);

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

                <CelName>{t('diary.dashboard.daily_calories_intake')}</CelName>
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
                <CelName>
                  {t('diary.dashboard.daily_physical_activity')}
                </CelName>
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
                <CelNameBottom>
                  {t('diary.dashboard.consumed_calories')}
                </CelNameBottom>
              </CellHeader>
              <CelValue>{Math.round(consumedCalories)}</CelValue>
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
                <CelNameBottom>
                  {t('diary.dashboard.burned_calories')}
                </CelNameBottom>
              </CellHeader>
              <CelValue>{burnedCalories}</CelValue>
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
                <CelNameBottom>
                  {t('diary.dashboard.calories_remaining')}
                </CelNameBottom>
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
                <CelNameBottom>
                  {t('diary.dashboard.sports_remaining')}
                </CelNameBottom>
              </CellHeader>
              <CelValue>{sportRemaining} min</CelValue>
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
          <AttentionText>{t('diary.warning')}</AttentionText>
        </AttentionMessage>
      </Metawrap>
    </>
  );
};

export default DayDashboard;
