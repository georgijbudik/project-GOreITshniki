import styled from 'styled-components';

export const StyledWelcomeImageWrapper = styled.div`
  width: 348px;
  overflow: hidden;

  background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
  background-image: ${() =>
    `url(${process.env.PUBLIC_URL + '/images/mobile/sm-welcome-image.jpg'})`};
  background-repeat: no-repeat;
  background-position: bottom right 25%;
  background-size: 300px auto;

  @media screen and (max-width: 767px) and (min-resolution: 2dppx) {
    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/mobile/sm-welcome-image@2x.jpg'
      })`};
  }

  @media screen and (min-width: 768px) {
    width: 65.31%;

    background-position: bottom right;
    background-size: 446px auto;

    background-image: ${() =>
      `url(${process.env.PUBLIC_URL + '/images/tablet/md-welcome-image.jpg'})`};
  }

  @media screen and (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: ${() => {
      return `url(${
        process.env.PUBLIC_URL + '/images/tablet/md-welcome-image@2x.jpg'
      })`;
    }};
  }

  @media screen and (min-width: 1440px) {
    width: 53.54%;

    background-size: contain;
    background-position: bottom right;

    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image.jpg'
      })`};
  }

  @media screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image@2x.jpg'
      })`};
  }
`;
