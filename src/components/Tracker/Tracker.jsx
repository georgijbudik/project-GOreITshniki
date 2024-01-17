import {
  TrackerVideoStyled,
  TrackerCaloriesStyled,
  TrackerVideoContainer,
  TrackerCaloriesContainer,
  TrackerVideoPlayEl,
  TrackerVideoIcon,
  TrackerVideoText,
  TrackerVideoTextContainer,
  TrackerCaloriesIconEl,
  TrackerCaloriesIcon,
  TrackerCaloriesText,
} from './Tracker.styled';

export const TrackerVideo = () => {
  return (
    <TrackerVideoContainer>
      <TrackerVideoPlayEl>
        <TrackerVideoIcon width="12" height="12" stroke="#EFEDE8">
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-polygon'
            }
          ></use>
        </TrackerVideoIcon>
      </TrackerVideoPlayEl>
      <TrackerVideoTextContainer>
        <TrackerVideoStyled>350+</TrackerVideoStyled>
        <TrackerVideoText>Video tutorial</TrackerVideoText>
      </TrackerVideoTextContainer>
    </TrackerVideoContainer>
  );
};

export const TrackerCalories = () => {
  return (
    <TrackerCaloriesContainer>
      <TrackerCaloriesIconEl>
        <TrackerCaloriesIcon width="12" height="12" stroke="#EFEDE8">
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-human'
            }
          ></use>
        </TrackerCaloriesIcon>
      </TrackerCaloriesIconEl>
      <TrackerCaloriesStyled>
        500<TrackerCaloriesText>cal</TrackerCaloriesText>
      </TrackerCaloriesStyled>
    </TrackerCaloriesContainer>
  );
};