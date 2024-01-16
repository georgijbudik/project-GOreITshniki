import { useNavigate } from 'react-router-dom';

import LogOutBtn from 'components/LogOutBtn';

import {
  StyledUserBar,
  StyledUserBarSettingButton,
  StyledUserBarSettingsIcon,
  StyledUserBarAvatarWrapper,
  StyledUserBarAvatarBackgroundIcon,
  StyledUserBarAvatarIcon,
  StyledUserBarLogOutBtnWrapper,
} from './UserBar.styled';

const UserBar = () => {
  const navigate = useNavigate();

  return (
    <StyledUserBar>
      <StyledUserBarSettingButton
        onClick={() => {
          navigate('/profile');
        }}
      >
        <StyledUserBarSettingsIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-settings'
            }
          />
        </StyledUserBarSettingsIcon>
      </StyledUserBarSettingButton>

      <StyledUserBarAvatarWrapper>
        <StyledUserBarAvatarBackgroundIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite/sprite.svg#icon-avatar-bg'
            }
          ></use>
        </StyledUserBarAvatarBackgroundIcon>
        <StyledUserBarAvatarIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-avatar'
            }
          ></use>
        </StyledUserBarAvatarIcon>
      </StyledUserBarAvatarWrapper>

      <StyledUserBarLogOutBtnWrapper>
        <LogOutBtn filled />
      </StyledUserBarLogOutBtnWrapper>
    </StyledUserBar>
  );
};

export default UserBar;
