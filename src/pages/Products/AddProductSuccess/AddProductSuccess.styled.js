import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  min-width: 278px;
  padding: 48px 88px;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#10100f' : '#efeff0'};

  @media screen and (min-width: 375px) {
    width: 333px;
  }

  @media screen and (min-width: 768px) {
    width: 428px;
    padding: 64px 135px;
  }

  @media screen and (min-width: 1440px) {
    padding: 48px 136px 62px 136px;
  }
`;

export const StyledImgContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 123px;
  height: 97px;
`;

export const StyledTextWellDone = styled.p`
  margin-top: 3px;
  /* color: var(--main-text-color); */
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-top: 19px;
  }
`;

export const StyledTextCalories = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid rgba(239, 237, 232, 0.3)'
      : '1px solid rgba(100, 100, 100, 0.7)'};
  font-size: 14px;
  line-height: 1.3;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const StyledTextAmount = styled.span`
  color: var(--accent-color);
`;

export const StyledNextBtn = styled.button`
  padding: 12px 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 12px;
  border: none;
  background-color: var(--accent-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--icon-color);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
  }
`;

export const StyledToDiaryBtn = styled.button`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.3)'
      : 'rgba(100, 100, 100, 0.7)'};

  font-size: 14px;
  line-height: 128.571%;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.text.primary};

    & > svg {
      stroke: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const StyledToDiarySvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.3)'
      : 'rgba(100, 100, 100, 0.7)'};

  transition: var(--transition);
`;
