import styled from 'styled-components';

export const StyledForm = styled.form`
  box-sizing: border-box;
  min-width: 278px;
  padding: 48px 32px 60px 32px;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#10100f' : '#efede8'};

  @media screen and (min-width: 375px) {
    width: 333px;
    padding: 48px 24px 60px 24px;
  }

  @media screen and (min-width: 768px) {
    width: 479px;
    padding: 48px 32px 48px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 48px 32px 62px 32px;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledNameInput = styled.input`
  box-sizing: border-box;
  padding: 8px 14px;
  width: 100%;
  height: 34px;
  border: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid var(--border-color)'
      : '1px solid rgba(110, 110, 110, 0.32)'};
  border-radius: 12px;
  background: transparent;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.3)'
      : '1px solid rgba(100, 100, 100, 0.2)'};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  outline: none;

  &:focus {
    border: 1px solid var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const StyledGramsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 34px;
  border-radius: 12px;
  background: transparent;
  border: ${({ $hasFocus, theme }) => {
    const darkColor =
      $hasFocus && theme.palette.mode === 'dark'
        ? '1px solid var(--accent-color)'
        : '1px solid var(--border-color)';
    const lightColor =
      $hasFocus && theme.palette.mode === 'light'
        ? '1px solid var(--accent-color)'
        : '1px solid rgba(100, 100, 100, 0.2)';
    return theme.palette.mode === 'dark' ? darkColor : lightColor;
  }};

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`;

export const StyledGramsInput = styled.input`
  box-sizing: border-box;
  padding: 8px 14px;
  width: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'var(--main-text-color)'
      : '1px solid rgba(#040404)'};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const StyledTextGrams = styled.span`
  width: 62px;
  padding: 0 14px;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : '1px solid rgba(#040404)'};
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledTextCalories = styled.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : '1px solid rgba(#040404)'};
  font-size: 12px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const StyledTextAmount = styled.span`
  margin-top: 16px;
  margin-left: 4px;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'var(--main-text-color)'
      : '1px solid rgba(100, 100, 100, 0.2)'};
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 16px;
  }
`;
