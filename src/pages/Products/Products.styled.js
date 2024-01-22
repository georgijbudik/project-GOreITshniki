import styled from 'styled-components';

export const StyledWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    height: calc(100% - 90px);
    position: fixed;
    z-index: -1;
    background-image: ${({ theme }) =>
      theme.palette.mode === 'light'
        ? 'none'
        : `url(${
            process.env.PUBLIC_URL + '/images/desktop/lg-products-image.jpg'
          })`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
    bottom: 0;
    right: 0;
  }

  @media screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: ${({ theme }) =>
      theme.palette.mode === 'light'
        ? 'none'
        : `url(${
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
    padding: 72px 0 81px 0;
  }
`;

export const StyledContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
