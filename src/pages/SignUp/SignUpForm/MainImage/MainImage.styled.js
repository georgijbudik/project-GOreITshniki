import styled from 'styled-components';

export const StyledMainImageWrapper = styled.div`
  width: 446px;
  height: 669px;
  position: absolute;
  z-index: -1;

  /* background: linear-gradient(89deg, #040404 91.1%, rgba(4, 4, 4, 0) 90.79%); */
  background-image: linear-gradient(
      168.14deg,
      #040404 14.75%,
      rgba(4, 4, 4, 0) 52.97%
    ),
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/mobile/sm-welcome-image@2x.jpg'
      })`};
  background-repeat: no-repeat;
  background-position: 57px 114px;
  background-size: 298px auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 1005px;

    background-position: 300px -58px;
    background-size: 437px auto;

    background-image: linear-gradient(
        168.14deg,
        #040404 14.75%,
        rgba(4, 4, 4, 0) 52.97%
      ),
      linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      ${() =>
        `url(${
          process.env.PUBLIC_URL + '/images/tablet/md-welcome-image.jpg'
        })`};
  }

  @media screen and (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: ${() => {
      return `url(${
        process.env.PUBLIC_URL + '/images/tablet/md-welcome-image@2x.jpg'
      })`;
    }};
  }

  @media screen and (min-width: 1440px) {
    background-size: 670px auto;
    background-position: 674px 0px;
    top: 0px;

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
