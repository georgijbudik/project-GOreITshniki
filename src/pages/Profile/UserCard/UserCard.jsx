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
  AvatarContainer,
  DisclaimerText,
} from './UserCard.styled';
import LogOutBtn from 'components/LogOutBtn';
import { updateAvatar } from '../../../redux/auth/authOperations';
import {
  selectUserCalories,
  selectUserInfo,
  selectAvatarUrl,
  selectIsImageLoading,
} from '../../../redux/auth/authSelectors';
import Loader from 'components/Loader';

const UserCard = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectUserInfo);
  const calories = useSelector(selectUserCalories);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const avatarURL = useSelector(selectAvatarUrl);
  const isImageLoading = useSelector(selectIsImageLoading);

  const handleFileChange = e => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!file) return;
    const formData = new FormData();
    formData.append('avatarURL', file);
    dispatch(updateAvatar(formData));
  }, [file, dispatch]);

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
              />
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
          {isImageLoading ? (
            <AvatarContainer>
              <Loader />
            </AvatarContainer>
          ) : avatarURL ? (
            <AvatarContainer>
              <img alt="User avatar" src={avatarURL} />
            </AvatarContainer>
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
              <SvgDailyIcon width="20" height="20" fill="#EF8964">
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
            <DailyResult>110 {t('profile.user_card.min')}</DailyResult>
          </DailyCard>
        </DailyContainer>
        <DisclaimerContainer>
          <SvgExclamationIcon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-Attention1'
              }
            />
          </SvgExclamationIcon>
          <DisclaimerText>{t('profile.user_card.exclamation')}</DisclaimerText>
        </DisclaimerContainer>
        <LogOutBtnWraper>
          <LogOutBtn filled />
        </LogOutBtnWraper>
      </UserInfo>
    </Container>
  );
};

export default UserCard;
