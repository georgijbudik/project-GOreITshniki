import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 40px;
  min-width: 280px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 704px;
    height: 660px;
    overflow: auto;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 28px;
    width: 850px;
    height: 487px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    row-gap: 32px;
    column-gap: 16px;
  }
`;

export const StyledContainerNoResults = styled.div`
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    margin-top: 132px;
    width: 580px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 136px;
  }
`;

export const StyledTextNoResults = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const StyledTextTryAgain = styled.p`
  margin-top: 16px;
  color: #e6533c;
  font-size: 14px;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const StyledTextNoResultsRed = styled.span`
  color: #e6533c;
`;
