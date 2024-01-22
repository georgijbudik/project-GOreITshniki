import styled from 'styled-components';

export const StyledMainImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;

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
