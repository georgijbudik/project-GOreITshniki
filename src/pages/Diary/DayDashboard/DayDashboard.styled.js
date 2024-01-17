import styled from 'styled-components';

export const DailyCalorieIntakeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DailyCalorieIntake = styled.div`
  display: flex;
  flex-direction: column;
  width: 127px;
  height: 66px;
  padding: 14px;
  align-items: flex-start;
  gap: 32px;
  color: rgba(239, 237, 232, 0.8);

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: #e6533c;
  justify-content: space-between;
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
