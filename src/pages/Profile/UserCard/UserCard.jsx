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
  LogOutButton,
  SvgLogoutIcon,
} from './UserCard.styled';

const UserCard = () => {
  return (
    <Container>
      <ProfileSettings>Profile Settings</ProfileSettings>
      <UserInfo>
        <UserAvatar width="50" height="50" fill="rgba(239, 237, 232, 0.1)">
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-avatar'
            }
          ></use>
        </UserAvatar>
        <UserName>Anna Rybachok</UserName>
        <UserRole>User</UserRole>
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
              Daily calorie intake
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
              Daily phisical activity
            </DailyTitle>
            <DailyResult>0 min</DailyResult>
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
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </DisclaimerContainer>
        <LogOutButton>
          Logout
          <SvgLogoutIcon height="20" width="20">
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-log-out'
              }
            ></use>
          </SvgLogoutIcon>
        </LogOutButton>
      </UserInfo>
    </Container>
  );
};

export default UserCard;
