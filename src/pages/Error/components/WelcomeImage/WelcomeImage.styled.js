import styled from 'styled-components';

export const StyledWelcomeImageWrapper = styled.div`
  width: 298px;
  overflow: hidden;

  background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);

  background-image: ${() =>
    `url(${process.env.PUBLIC_URL + '/images/mobile/sm-welcome-image.png'})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 446px auto;

  @media screen and (max-width: 767px) and (min-resolution: 2dppx) {
    width: 298px;

    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/mobile/sm-welcome-image@2x.png'
      })`};
  }

  @media screen and (min-width: 768px) {
    width: 437px;

    background-position: center right;
    background-size: cover;

    background-image: ${() =>
      `url(${process.env.PUBLIC_URL + '/images/tablet/md-welcome-image.png'})`};
  }

  @media screen and (min-width: 768px) and (min-resolution: 2dppx) {
    width: 437px;

    background-position: center right;
    background-size: cover;

    background-image: ${() => {
      return `url(${
        process.env.PUBLIC_URL + '/images/tablet/md-welcome-image@2x.png'
      })`;
    }};
  }

  @media screen and (min-width: 1440px) {
    width: 100%;

    background-size: contain;
    background-position: center right;

    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image.png'
      })`};
  }

  @media screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    width: 100%;

    background-size: contain;
    background-position: center right;

    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image@2x.png'
      })`};
  }
`;

export const StyledWelcomeImagePicture = styled.picture`
  display: block;

  max-width: 446px;
  object-fit: contain;
  object-position: center;

  @media screen and (min-width: 768px) {
    max-width: 670px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 670px;
  }

  & > img {
    display: block;
  }
`;
