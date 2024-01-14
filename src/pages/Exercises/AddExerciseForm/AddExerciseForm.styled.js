import styled from 'styled-components';

export const StyledAddExerciseFormWrapper = styled.div`
  padding: 48px 16px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const StyledAddExerciseFormGifWrapper = styled.div`
  display: flex;
  justify-content: center;
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
`;

export const StyledAddExerciseFormTimer = styled.div`
  margin-bottom: 14px;
`;

export const StyledAddExerciseFormTimerTitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 10px;
  line-height: 140%;

  margin-bottom: 4px;
`;

export const StyledAddExerciseFromTimerButton = styled.button`
  border: none;
  line-height: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  margin-bottom: 8px;
`;

export const StyledAddExerciseFromTimerCalories = styled.p`
  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  line-height: 128.571%;

  & > span {
    color: var(--accent-color);

    font-size: 14px;
    line-height: 128.571%;
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
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  & > span {
    color: rgba(239, 237, 232, 0.4);
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 12px;
    line-height: 133.333%;
  }

  & > p {
    color: var(--main-text-color);
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 14px;
    font-weight: 700;
    line-height: 128.571%;

    margin: 0;
  }
`;
