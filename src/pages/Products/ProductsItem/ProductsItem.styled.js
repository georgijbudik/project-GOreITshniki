import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  min-height: 141px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);
`;

export const DietContainer = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  min-width: 41px;
  min-height: 24px;
  padding: 5px 7.5px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const DietText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
`;

export const RecomContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Circle = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--green-colro);
`;

export const RecomText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecomBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--accent-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`;

export const AddSvg = styled.svg`
  margin-left: 8px;
`;

export const TitleContainer = styled.div`
  margin-top: 41px;
  display: flex;
  gap: 16px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
`;

export const TitleCircle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`;

export const BottomContainer = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 16px;
`;

export const BottomText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`;

export const BottomAmount = styled.span`
  color: var(--main-text-color);
`;
