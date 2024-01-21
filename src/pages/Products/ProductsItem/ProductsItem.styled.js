import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 16px;
  min-width: 280px;
  height: 141px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 375px) {
    min-width: 0x;
    width: 335px;
  }

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const StyledTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDietContainer = styled.div`
  box-sizing: border-box;
  padding: 5px 7.5px;
  width: 41px;
  height: 24px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`;

export const StyledDietText = styled.p`
  font-size: 12px;
  font-weight: 700;
`;

export const StyledTopRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledRecomContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledCircle = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ $isNotAllowed }) =>
    $isNotAllowed ? 'var(--red-color)' : 'var(--green-colro)'};
`;

export const StyledRecomText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledAddBtn = styled.button`
  box-sizing: border-box;
  height: 18px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: var(--accent-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  transition: var(--transition);

  &:hover,
  &:focus {
    scale: 1.1;
  }

  @media screen and (min-width: 375px) {
    height: 24px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const StyledAddSvg = styled.svg`
  margin-left: 8px;
`;

export const StyledTitleContainer = styled.div`
  margin-top: 35px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 375px) {
    margin-top: 31px;
  }
`;

export const StyledTitleCircle = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #efa082;
`;

export const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const StyledBottomContainer = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 6px;

  @media screen and (min-width: 375px) {
    gap: 16px;
  }
`;

export const StyledBottomText = styled.p`
  font-size: 11px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 375px) {
    font-size: 12px;
  }
`;

export const StyledBottomAmount = styled.span`
  color: var(--main-text-color);
`;
