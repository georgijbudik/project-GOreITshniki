import styled from 'styled-components';
import { StyledButton } from 'components/Button/Button.styled';

export const StyledAddExerciseSuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding-top: 48px;
  padding-bottom: 48px;

  width: 300px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    gap: 32px;

    width: 430px;
    max-width: 430px;

    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const StyledAddExerciseSuccessTitle = styled.h3`
  text-align: center;

  font-size: 24px;
  font-weight: 700;
  line-height: 133.333%;

  margin-bottom: 16px;
`;

export const StyledAddExerciseSuccessInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StyledAddExerciseSuccessInfoItem = styled.p`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.3)'
      : 'rgba(100, 100, 100, 0.7)'};
  font-size: 14px;
  line-height: 128.571%;

  & > span {
    color: var(--accent-color);
    font-size: 14px;
    line-height: 128.571%;

    margin-left: 4px;
  }
`;

export const StyledAddExerciseSuccessNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledAddExerciseSuccessNavigationButton = styled(StyledButton)`
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;
  padding: 12px 32px;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
  }
`;

export const StyledAddExerciseSuccessNavigationLink = styled.p`
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

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};

    & > svg {
      stroke: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;

export const StyledAddExerciseSuccessNavigationIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.3)'
      : 'rgba(100, 100, 100, 0.7)'};

  transition: var(--transition);
`;
