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
  StyledAddExerciseFormTimerTitle,
  StyledAddExerciseFromTimerButton,
  StyledAddExerciseFromTimerCalories,
  StyledAddExerciseFormInfoList,
  StyledAddExerciseFormInfoItem,
} from './AddExerciseForm.styled';

const mockExercise = {
  _id: '64f2458d6f67bc34bae4f7f7',
  bodyPart: 'chest',
  equipment: 'leverage machine',
  gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
  name: 'assisted chest dip (kneeling)',
  target: 'pectorals',
  burnedCalories: 329,
  time: 3,
};

const formatDescription = text => {
  const shortenText = text.length > 12 ? text.slice(0, 12) + '...' : text;

  return shortenText.charAt(0).toUpperCase() + shortenText.slice(1);
};

const renderTime = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds === 0 ? '00' : seconds}`;
};

const AddExerciseForm = ({ exercise }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <BasicModalWindow>
      <StyledAddExerciseFormWrapper>
        <StyledAddExerciseFormGifWrapper>
          <StyledAddExerciseFormGif $gif={mockExercise.gifUrl} />
        </StyledAddExerciseFormGifWrapper>

        <StyledAddExerciseFormTimerWrapper>
          <StyledAddExerciseFormTimerTitle>
            Time
          </StyledAddExerciseFormTimerTitle>

          <StyledAddExerciseFormTimer>
            <CountdownCircleTimer
              isPlaying={isPlaying}
              duration={mockExercise.time * 60}
              colors={'#e6533c'}
              colorsTime={[7, 5, 2, 0]}
            >
              {renderTime}
            </CountdownCircleTimer>
          </StyledAddExerciseFormTimer>

          <StyledAddExerciseFromTimerButton
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
          </StyledAddExerciseFromTimerButton>

          <StyledAddExerciseFromTimerCalories>
            Burned calories: <span>{mockExercise.burnedCalories}</span>
          </StyledAddExerciseFromTimerCalories>
        </StyledAddExerciseFormTimerWrapper>

        <StyledAddExerciseFormInfoList>
          <StyledAddExerciseFormInfoItem>
            <span>Name</span>
            <p>{formatDescription(mockExercise.name)}</p>
          </StyledAddExerciseFormInfoItem>
          <StyledAddExerciseFormInfoItem>
            <span>Target</span>
            <p>{formatDescription(mockExercise.target)}</p>
          </StyledAddExerciseFormInfoItem>

          <StyledAddExerciseFormInfoItem>
            <span>Body part</span>
            <p>{formatDescription(mockExercise.bodyPart)}</p>
          </StyledAddExerciseFormInfoItem>

          <StyledAddExerciseFormInfoItem>
            <span>Equipment</span>
            <p>{formatDescription(mockExercise.equipment)}</p>
          </StyledAddExerciseFormInfoItem>
        </StyledAddExerciseFormInfoList>

        <Button paddingX={32} paddingY={12}>
          Add to diary
        </Button>
      </StyledAddExerciseFormWrapper>
    </BasicModalWindow>
  );
};

export default AddExerciseForm;
