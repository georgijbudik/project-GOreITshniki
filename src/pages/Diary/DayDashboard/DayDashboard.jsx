import {
  DailyCalorieIntake,
  CellHeader,
  DashBoardElementPic,
  CelName,
  CelValue,
  DailyCalorieIntakeWrapper,
  ProcessedDashboardDataWrapper,
  ProcessedDashboardData,
  AttentionText,
  AttentionPic,
  AttentionMessage,
  CelNameBottom,
} from './DayDashboard.styled';

const DayDashboard = () => {
  return (
    <>
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
          <CelValue>2200</CelValue>
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
          <CelValue>0</CelValue>
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
          <CelValue>0</CelValue>
        </ProcessedDashboardData>
      </ProcessedDashboardDataWrapper>

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
            <CelNameBottom>Calories remaining</CelNameBottom>
          </CellHeader>
          <CelValue>1493</CelValue>
        </ProcessedDashboardData>
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
            <CelNameBottom>Sports remaining</CelNameBottom>
          </CellHeader>
          <CelValue>85 min</CelValue>
        </ProcessedDashboardData>
      </ProcessedDashboardDataWrapper>
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
    </>
  );
};

export default DayDashboard;
