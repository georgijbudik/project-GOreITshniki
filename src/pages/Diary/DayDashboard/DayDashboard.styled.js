import styled from 'styled-components';

export const DailyCalorieIntakeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    /* width: 187px;
    height: 116px; */
    display: block;
    justify-content: flex-start;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 16px;
  }
`;

export const DailyCalorieIntake = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  height: 96px;
  padding: 14px;
  align-items: flex-start;
  /* gap: 32px; */
  color: rgba(239, 237, 232, 0.8);

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: #e6533c;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    max-width: none;
    width: 187px;
    height: 116px;
    /* display: block; */
    justify-content: space-between;
    margin-bottom: 16px;
  }
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
  @media screen and (min-width: 768px) {
    /* width: 187px; */
    height: 116px;
    display: block;
    justify-content: flex-start;
    margin-top: 0;
    padding: 0 0 0 16px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    padding: 0;
    gap: 16px;
    margin-top: 16px;
  }
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
  justify-content: space-between;
  /* border-color: ${props => (props.markering > 0 ? 'red' : 'green')}; */
  @media screen and (min-width: 768px) {
    display: flex;
    max-width: none;
    width: 187px;
    height: 116px;
    /* display: block; */
    justify-content: flex-start;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
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
  border-color: ${props => (props.$markering > 0 ? 'red' : 'green')};
  @media screen and (min-width: 768px) {
    max-width: none;
    width: 187px;
    height: 116px;
    /* display: block; */
    justify-content: space-between;
    margin-bottom: 16px;
    padding-left: 16px;
  }
  @media screen and (min-width: 768px) {
    /* display: block; */
  }
`;

export const AttentionMessage = styled.div`
  display: flex;
  margin-top: 20px;
  /* margin-top: 20px; */
  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 32px;
  }
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
  font-size: 14px;
  line-height: 128.571%;
  text-align: left;
  @media screen and (min-width: 768px) {
    width: 561px;
    height: 48px;
    font-size: 16px;
    line-height: 150%;
  }
  @media screen and (min-width: 1440px) {
    width: 358px;
    height: 72px;
  }
`;
export const Markered = styled.span`
  background-color: ${props => (props.$markering === true ? 'green' : 'red')};
`;

export const Metawrap = styled.div`
  @media screen and (min-width: 768px) {
  }
`;

export const DshbrdWrpr = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0 0 0 0;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;
