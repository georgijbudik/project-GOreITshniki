import styled from 'styled-components';

export const StyledMainImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;

  /* background: linear-gradient(89deg, #040404 91.1%, rgba(4, 4, 4, 0) 90.79%); */
  /* linear-gradient(
      168.14deg,
      #040404 14.75%,
      rgba(4, 4, 4, 0) 52.97%
    ),
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%), */
  background-image: ${() =>
    `url(${
      process.env.PUBLIC_URL + '/images/mobile/sm-welcome-image@2x.jpg'
    })`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;
  bottom: 0;
  right: 0;

  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 0;
    right: 0;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: ${() => {
      return `url(${
        process.env.PUBLIC_URL + '/images/tablet/md-welcome-image@2x.jpg'
      })`;
    }};
  }

  @media screen and (min-width: 1440px) {
    position: fixed;
    bottom: 0;
    right: 0;
    background-position: right bottom;
    background-size: contain;

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

export const ContainerStatisticsInfo = styled.div`
  position: relative;
`;
