import styled from 'styled-components';

export const StyledWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    height: calc(100vh - 90px);
    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-products-image.jpg'
      })`};
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 100%;
  }

  @media screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-products-image@2x.jpg'
      })`};
  }
`;

export const StyledSection = styled.section`
  padding: 40px 0 80px 0;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    padding: 72px 0 48px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
    padding: 72px 0 81px 0;
  }
`;

export const StyledContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;