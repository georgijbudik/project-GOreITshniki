import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <TrackerVideoContainer>
      <TrackerVideoPlayEl>
        <TrackerVideoIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-polygon'
            }
          ></use>
        </TrackerVideoIcon>
      </TrackerVideoPlayEl>
      <TrackerVideoTextContainer>
        <TrackerVideoStyled>350+</TrackerVideoStyled>
        <TrackerVideoText>{t('main_image.videos')}</TrackerVideoText>
      </TrackerVideoTextContainer>
    </TrackerVideoContainer>
  );
};

export const TrackerCalories = () => {
  const { t } = useTranslation();

  return (
    <TrackerCaloriesContainer>
      <TrackerCaloriesIconEl>
        <TrackerCaloriesIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-human'
            }
          ></use>
        </TrackerCaloriesIcon>
      </TrackerCaloriesIconEl>
      <TrackerCaloriesStyled>
        500<TrackerCaloriesText>{t('main_image.calories')}</TrackerCaloriesText>
      </TrackerCaloriesStyled>
    </TrackerCaloriesContainer>
  );
};
