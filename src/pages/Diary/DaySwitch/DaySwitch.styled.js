import { styled } from 'styled-components';

export const StyledDaySwitchWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const StyledDate = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  line-height: 0;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover,
  &:focus {
    & > svg {
      stroke: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const StyledDateText = styled.p`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 111.111%;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 133.333%;
  }
`;

export const StyledCalendarIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--accent-color);

  fill: transparent;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledCalendarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCalendarNavigationContainer = styled.div`
  display: flex;
  gap: 6px;
`;

export const StyledCalendarNavigationButton = styled.button`
  line-height: 0;
  padding: 0;
  border: none;
  background-color: transparent;

  &:hover,
  &:focus {
    & > svg {
      fill: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const StyledCalendarNavigationIcon = styled.svg`
  width: 16px;
  height: 16px;

  transition: var(--transition);

  fill: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.2)'
      : 'rgba(100, 100, 100, 0.7)'};
`;
