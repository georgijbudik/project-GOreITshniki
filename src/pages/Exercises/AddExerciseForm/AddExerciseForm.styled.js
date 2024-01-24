import styled from 'styled-components';

export const StyledAddExerciseFormWrapper = styled.div`
  padding: 48px 16px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 694px;
  }
`;

export const StyledAddExerciseFormGifWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 14px;
`;

export const StyledAddExerciseFormGif = styled.div`
  display: flex;
  width: 270px;
  height: 226px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: ${({ $gif }) =>
    `linear-gradient(0deg, rgba(4, 4, 4, 0.2) 0%, rgba(4, 4, 4, 0.2) 100%), url(${$gif}), lightgray 0px -17.5px / 100% 119.469% no-repeat`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 270px 226px;
`;

export const StyledAddExerciseFormTimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const StyledAddExerciseFormTimer = styled.div`
  margin-bottom: 14px;

  transform: rotate(180deg);
`;

export const StyledAddExerciseFormTime = styled.p`
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 16px;
  line-height: 150%;

  transform: rotate(180deg);
`;

export const StyledAddExerciseFormTimerTitle = styled.p`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : 'rgba(100, 100, 100, 0.7)'};
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 10px;
  line-height: 140%;

  margin: 0;
  margin-bottom: 4px;
`;

export const StyledAddExerciseFormTimerButton = styled.button`
  border: none;
  line-height: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  margin-bottom: 8px;
`;

export const StyledAddExerciseFormTimerCalories = styled.p`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : 'rgba(100, 100, 100, 0.7)'};

  font-size: 14px;
  line-height: 128.571%;

  margin: 0;

  & > span {
    color: var(--accent-color);

    font-size: 14px;
    line-height: 128.571%;
  }
`;

export const StyledAddExerciseFormRightPartWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
`;

export const StyledAddExerciseFormInfoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  margin-bottom: 24px;
`;

export const StyledAddExerciseFormInfoItem = styled.div`
  flex-grow: 1;
  width: 100px;

  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  gap: 4px;

  border-radius: 12px;
  border: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid rgba(239, 237, 232, 0.2)'
      : '1px solid rgba(100, 100, 100, 0.7)'};

  background: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.05)'
      : 'rgba(100, 100, 100, 0.05)'};

  @media screen and (min-width: 768px) {
    width: 150px;
  }

  & > span {
    color: ${({ theme }) =>
      theme.palette.mode === 'dark'
        ? 'rgba(239, 237, 232, 0.4)'
        : 'rgba(100, 100, 100, 0.7)'};
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    line-height: 133.333%;

    @media screen and (min-width: 768px) {
      line-height: 150%;
    }
  }

  & > p {
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 14px;
    font-weight: 700;
    line-height: 128.571%;

    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }
`;
