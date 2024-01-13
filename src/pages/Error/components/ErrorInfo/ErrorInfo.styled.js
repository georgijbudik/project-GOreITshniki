import styled from 'styled-components';

export const StyledErrorInfoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const StyledErrorStatus = styled.h2`
  color: var(--main-text-color);

  font-size: 66px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.66px;

  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 160px;
    line-height: 93.75%;
    letter-spacing: 1.6px;
  }
`;

export const StyledErrorMessage = styled.p`
  color: var(--main-text-color);

  font-size: 14px;
  line-height: 128.571%;

  max-width: 200px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;

    max-width: 356px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 477px;
  }
`;
