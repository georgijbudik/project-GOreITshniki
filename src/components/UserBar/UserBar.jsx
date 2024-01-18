import { useNavigate } from 'react-router-dom';

import LogOutBtn from 'components/LogOutBtn';
import UserSettings from 'components/UserSettings';

import {
  StyledUserBar,
  StyledUserBarSettingButton,
  StyledUserBarSettingsIcon,
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

      <UserSettings />

      <StyledUserBarLogOutBtnWrapper>
        <LogOutBtn filled />
      </StyledUserBarLogOutBtnWrapper>
    </StyledUserBar>
  );
};

export default UserBar;
