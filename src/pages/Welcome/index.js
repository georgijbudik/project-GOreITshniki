import styled from 'styled-components';

export const HeroText = styled.h1`
  color: #efede8;
  font-size: 38px;
  font-weight: 500;
  line-height: calc(40 / 38);
  margin-bottom: 40px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    font-size: 70px;
    line-height: calc(78 / 70);
  }
`;

export const WelcomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 90px 0px 35px 0px;
  /* position: relative; */

  @media screen and (min-width: 768px) {
    width: 598px;
    padding: 140px 0px 0px 0px;

    @media screen and (min-width: 1440px) {
      padding: 151px 0px 0px 0px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const BodyLine = styled.svg`
  position: absolute;
  left: -9px;
  top: 6px;
  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
  }
`;

export const BodyElementSpan = styled.span`
  position: relative;
`;
