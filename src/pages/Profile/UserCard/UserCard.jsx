import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import {
  selectAvatarUrl,
  selectUserInfo,
} from '../../../redux/profile/profileSelectors';
import { updateAvatar } from '../../../redux/profile/profileOperations';

const UserCard = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectUserInfo);
  const [calories, setCalories] = useState(0);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const avatarURL = useSelector(selectAvatarUrl);

  const handleFileChange = e => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!file) return;
    const formData = new FormData();
    formData.append('avatarURL', file);
    dispatch(updateAvatar(formData));
  }, [file, dispatch]);

  useEffect(() => {
    setCalories(currentUser.calories);
  }, [currentUser.calories]);

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
          {avatarURL ? (
            <img
              alt="User avatar"
              url={avatarURL}
              width="100px"
              height="100px"
            ></img>
          ) : (
            <UserAvatar fill="rgba(239, 237, 232, 0.1)">
              <use
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-avatar'
                }
              ></use>
            </UserAvatar>
          )}
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
            <DailyResult>{calories}</DailyResult>
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
