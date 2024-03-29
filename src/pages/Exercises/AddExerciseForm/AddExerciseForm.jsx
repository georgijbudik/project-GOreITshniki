import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExerciseToDiary } from '../../../redux/exercises/exerciseOperations';
import { selectDiaryDate } from '../../../redux/diary/diarySelectors';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import BasicModalWindow from 'components/BasicModalWindow';
import Button from 'components/Button';

import {
  StyledAddExerciseFormWrapper,
  StyledAddExerciseFormGifWrapper,
  StyledAddExerciseFormGif,
  StyledAddExerciseFormTimerWrapper,
  StyledAddExerciseFormTimer,
  StyledAddExerciseFormTime,
  StyledAddExerciseFormTimerTitle,
  StyledAddExerciseFormTimerButton,
  StyledAddExerciseFormTimerCalories,
  StyledAddExerciseFormRightPartWrapper,
  StyledAddExerciseFormInfoList,
  StyledAddExerciseFormInfoItem,
} from './AddExerciseForm.styled';

const formatDescription = text => {
  const shortenText = text.length > 12 ? text.slice(0, 12) + '...' : text;

  return shortenText.charAt(0).toUpperCase() + shortenText.slice(1);
};

const renderTime = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const timeString = `${minutes}:${String(seconds).padStart(2, '0')}`;

  return <StyledAddExerciseFormTime>{timeString}</StyledAddExerciseFormTime>;
};

const AddExerciseForm = ({
  onClose,
  exeId,
  gifUrl,
  name,
  bodyPart,
  target,
  equipment,
  burnedCalories: exeCalories,
  time,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [passedTime, setPassedTime] = useState(0);
  const date = useSelector(selectDiaryDate);

  const handleAddToDiary = () => {
    onClose();
    const data = {
      id: exeId,
      date,
      time: passedTime,
      calories: burnedCalories,
    };
    dispatch(addExerciseToDiary(data));
  };

  return (
    <BasicModalWindow onClose={onClose}>
      <StyledAddExerciseFormWrapper>
        <div>
          <StyledAddExerciseFormGifWrapper>
            <StyledAddExerciseFormGif $gif={gifUrl} />
          </StyledAddExerciseFormGifWrapper>

          <StyledAddExerciseFormTimerWrapper>
            <StyledAddExerciseFormTimerTitle>
              {t('exercises.exercise_modal.time')}
            </StyledAddExerciseFormTimerTitle>

            <StyledAddExerciseFormTimer>
              <CountdownCircleTimer
                isPlaying={isPlaying}
                rotation="counterclockwise"
                duration={time * 60}
                colors={'#e6533c'}
                size={124}
                strokeWidth={4}
                strokeLinecap="square"
                trailColor="rgba(239, 237, 232, 0.10)"
                trailStrokeWidth={5}
                onUpdate={remainingTime => {
                  const calories =
                    (exeCalories / (time * 60)) * (time * 60 - remainingTime);

                  const passedTime = time * 60 - remainingTime;
                  setPassedTime(passedTime);
                  setBurnedCalories(calories.toFixed());
                }}
                onComplete={() => {
                  setIsPlaying(false);
                }}
              >
                {renderTime}
              </CountdownCircleTimer>
            </StyledAddExerciseFormTimer>

            <StyledAddExerciseFormTimerButton
              onClick={() => {
                setIsPlaying(prev => !prev);
              }}
            >
              {isPlaying ? (
                <svg width="32" height="32">
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-pause'
                    }
                  ></use>
                </svg>
              ) : (
                <svg width="32" height="32">
                  <use
                    xlinkHref={
                      process.env.PUBLIC_URL +
                      '/images/sprite/sprite.svg#icon-play'
                    }
                  ></use>
                </svg>
              )}
            </StyledAddExerciseFormTimerButton>

            <StyledAddExerciseFormTimerCalories>
              {t('exercises.exercise_modal.burned_calories')}:{' '}
              <span>{burnedCalories}</span>
            </StyledAddExerciseFormTimerCalories>
          </StyledAddExerciseFormTimerWrapper>
        </div>
        <StyledAddExerciseFormRightPartWrapper>
          <StyledAddExerciseFormInfoList>
            <StyledAddExerciseFormInfoItem>
              <span>{t('exercises.exercise_modal.name')}</span>
              <p>{formatDescription(name)}</p>
            </StyledAddExerciseFormInfoItem>
            <StyledAddExerciseFormInfoItem>
              <span>{t('exercises.exercise_modal.target')}</span>
              <p>{formatDescription(target)}</p>
            </StyledAddExerciseFormInfoItem>

            <StyledAddExerciseFormInfoItem>
              <span>{t('exercises.exercise_modal.body_part')}</span>
              <p>{formatDescription(bodyPart)}</p>
            </StyledAddExerciseFormInfoItem>

            <StyledAddExerciseFormInfoItem>
              <span>{t('exercises.exercise_modal.equipment')}</span>
              <p>{formatDescription(equipment)}</p>
            </StyledAddExerciseFormInfoItem>
          </StyledAddExerciseFormInfoList>

          <Button
            paddingX={32}
            paddingY={12}
            onClick={handleAddToDiary}
            disabled={passedTime === 0}
          >
            {t('exercises.exercise_modal.add')}
          </Button>
        </StyledAddExerciseFormRightPartWrapper>
      </StyledAddExerciseFormWrapper>
    </BasicModalWindow>
  );
};

export default AddExerciseForm;
