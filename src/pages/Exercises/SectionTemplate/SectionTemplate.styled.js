import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  @media screen and (min-width: 1440px) {
    /* background-repeat: no-repeat;
    background-position: right bottom; */
    /* background-position-y: calc(100% + 50px); */
    /* background-size: contain; */
    /* background-image: ${() => {
      return `url('${process.env.PUBLIC_URL}/images/desktop/lg-welcome-image.jpg')`;
    }}; */

    @media only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      /* background-image: ${() => {
        return `url('${process.env.PUBLIC_URL}/images/desktop/lg-welcome-image@2x.jpg')`;
      }}; */
    }
  }
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
