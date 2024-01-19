import { useState } from 'react';
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

// const mockExercise = {
//   _id: '64f2458d6f67bc34bae4f7f7',
//   bodyPart: 'chest',
//   equipment: 'leverage machine',
//   gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
//   name: 'assisted chest dip (kneeling)',
//   target: 'pectorals',
//   burnedCalories: 329,
//   time: 3,
// };

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [burnedCalories, setBurnedCalories] = useState(0);

  return (
    <BasicModalWindow onClose={onClose}>
      <StyledAddExerciseFormWrapper>
        <div>
          <StyledAddExerciseFormGifWrapper>
            <StyledAddExerciseFormGif $gif={gifUrl} />
          </StyledAddExerciseFormGifWrapper>

          <StyledAddExerciseFormTimerWrapper>
            <StyledAddExerciseFormTimerTitle>
              Time
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
              Burned calories: <span>{burnedCalories}</span>
            </StyledAddExerciseFormTimerCalories>
          </StyledAddExerciseFormTimerWrapper>
        </div>
        <StyledAddExerciseFormRightPartWrapper>
          <StyledAddExerciseFormInfoList>
            <StyledAddExerciseFormInfoItem>
              <span>Name</span>
              <p>{formatDescription(name)}</p>
            </StyledAddExerciseFormInfoItem>
            <StyledAddExerciseFormInfoItem>
              <span>Target</span>
              <p>{formatDescription(target)}</p>
            </StyledAddExerciseFormInfoItem>

            <StyledAddExerciseFormInfoItem>
              <span>Body part</span>
              <p>{formatDescription(bodyPart)}</p>
            </StyledAddExerciseFormInfoItem>

            <StyledAddExerciseFormInfoItem>
              <span>Equipment</span>
              <p>{formatDescription(equipment)}</p>
            </StyledAddExerciseFormInfoItem>
          </StyledAddExerciseFormInfoList>

          <Button paddingX={32} paddingY={12}>
            Add to diary
          </Button>
        </StyledAddExerciseFormRightPartWrapper>
      </StyledAddExerciseFormWrapper>
    </BasicModalWindow>
  );
};

export default AddExerciseForm;
