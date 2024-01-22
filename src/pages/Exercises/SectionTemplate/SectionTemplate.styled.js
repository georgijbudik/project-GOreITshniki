import styled from 'styled-components';

export const Section = styled.section`
  position: relative;

  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 375px;
  margin: 0 auto;
  width: 100%;
  padding-top: 40px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
