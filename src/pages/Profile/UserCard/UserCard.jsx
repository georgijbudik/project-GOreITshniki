import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  ProfileSettings,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  DailyContainer,
  DailyCard,
  DailyTitle,
  DailyResult,
  SvgDailyIcon,
  DisclaimerContainer,
  SvgExclamationIcon,
  LogOutBtnWraper,
  AddProfilePicCross,
  AddProfilePicBackground,
  ProfilePicContainer,
  AddAvatarButton,
  AddAvatarLabel,
} from './UserCard.styled';
import LogOutBtn from 'components/LogOutBtn';
import { selectUserInfo } from '../../../redux/profile/profileSelectors';

const UserCard = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectUserInfo);
  const [file, setFile] = useState();

  const handleFileChange = e => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };

  return (
    <Container>
      <ProfileSettings className="profile-desktop-hidden">
        {t('profile.user_card.profile_settings')}
      </ProfileSettings>
      <UserInfo>
        <ProfilePicContainer>
          <AddAvatarLabel htmlFor="add-avatar-button">
            <AddAvatarButton
              id="add-avatar-button"
              onChange={handleFileChange}
              accept="image/png, image/jpg"
              className="add-avatar-button"
              type="file"
            />
            <AddProfilePicBackground>
              <use
                stroke="#e6533c"
                fill="#e6533c"
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-add-avatar'
                }
              />{' '}
            </AddProfilePicBackground>
            <AddProfilePicCross>
              <use
                stroke="#efede8"
                width="15"
                height="15"
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-cross'
                }
              />
            </AddProfilePicCross>
          </AddAvatarLabel>
          <UserAvatar fill="rgba(239, 237, 232, 0.1)">
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-avatar'
              }
            ></use>
          </UserAvatar>
        </ProfilePicContainer>

        <UserName>{currentUser.name}</UserName>
        <UserRole>{t('profile.user_card.user')}</UserRole>
        <DailyContainer>
          <DailyCard>
            <DailyTitle>
              <SvgDailyIcon width="18" height="18" fill="#EF8964">
                <use
                  xlinkHref={
                    process.env.PUBLIC_URL +
                    '/images/sprite/sprite.svg#icon-cutlery'
                  }
                ></use>
              </SvgDailyIcon>
              {t('profile.user_card.daily_calorie_intake')}
            </DailyTitle>
            <DailyResult>0</DailyResult>
          </DailyCard>
          <DailyCard>
            <DailyTitle>
              <SvgDailyIcon width="20" height="20" fill="#EF8964">
                <use
                  xlinkHref={
                    process.env.PUBLIC_URL +
                    '/images/sprite/sprite.svg#icon-dumbbell'
                  }
                ></use>
              </SvgDailyIcon>
              {t('profile.user_card.daily_phisycal_activity')}
            </DailyTitle>
            <DailyResult>0 {t('profile.user_card.min')}</DailyResult>
          </DailyCard>
        </DailyContainer>
        <DisclaimerContainer>
          <SvgExclamationIcon height="14.01" width="40" stroke="#EFEDE8">
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-exclamation-mark'
              }
            ></use>
          </SvgExclamationIcon>
          {t('profile.user_card.exclamation')}
        </DisclaimerContainer>
        <LogOutBtnWraper>
          <LogOutBtn filled />
        </LogOutBtnWraper>
      </UserInfo>
    </Container>
  );
};

export default UserCard;
