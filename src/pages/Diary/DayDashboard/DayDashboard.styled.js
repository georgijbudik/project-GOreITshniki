import styled from 'styled-components';

export const DailyCalorieIntakeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DailyCalorieIntake = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 157px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  /* gap: 32px; */
  color: rgba(239, 237, 232, 0.8);

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: #e6533c;
  justify-content: space-between;
`;

export const CellHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const DashBoardElementPic = styled.svg`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;

  margin-right: 8px;
  fill: #ef8964;
`;

export const CelName = styled.p`
  color: rgba(239, 237, 232, 0.8);

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  margin: 0;
  padding: 0;
  width: 106px;
`;

export const CelNameBottom = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  margin: 0;
  padding: 0;
  width: 106px;
`;

export const CelValue = styled.p`
  color: #efede8;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 111.111% */
  margin: 0;
`;

export const ProcessedDashboardDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;

export const ProcessedDashboardData = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  /* border-color: ${props => (props.markering > 0 ? 'red' : 'green')}; */
`;

export const ProcessedDashboardDataMarked = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  gap: 32px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-color: ${props => (props.markering > 0 ? 'red' : 'green')};
`;

export const AttentionMessage = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const AttentionPic = styled.svg`
  width: 24px;
  height: 24px;

  & path {
    width: 24px;
    height: 24px;
  }
`;

export const AttentionText = styled.p`
  padding: 0;
  margin: 0 0 0 8px;

  width: 303px;
  height: 54px;
  color: #efede84d;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
`;
export const Markered = styled.span`
  background-color: ${props => (props.$markering === true ? 'green' : 'red')};
`;
