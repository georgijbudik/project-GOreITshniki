import styled from 'styled-components';

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    h2 {
      margin-top: 72px;
    }
    margin-top: 0;
    margin-bottom: 32px;
  }
`;

export const DaySwitchRight = styled.div`
  margin-left: auto;
`;

export const Wrap = styled.div`
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    padding-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`;

export const MediaWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    /* padding-top: 64px; */
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;

    /* flex-direction: column; */
  }
`;

export const MediaWrapDayDashBoard = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 768px) {
    padding: 64px 0 0 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
    margin: 0 0 0 32px;
  }
`;
