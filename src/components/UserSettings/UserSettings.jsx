import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/global/globalSlice';
import { logOut } from '../../redux/auth/authOperations';

// import Avatar from '@mui/material/Avatar';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import { Logout, Settings } from '@mui/icons-material';

import {
  StyledUserSettingsAvatarBackgroundIcon,
  StyledUserSettingsAvatarIcon,
  StyledUserSettingsAvatarWrapper,
  // StyledUserSettingsAvatarButton,
} from './UserSettings.styled';

const UserSettings = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLanguageMenu = event => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };

  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
    handleCloseLanguageMenu();
    handleCloseUserMenu();
  };

  const handleLogOut = () => {
    handleCloseUserMenu();
    dispatch(logOut());
  };

  return (
    <>
      <StyledUserSettingsAvatarWrapper onClick={handleOpenUserMenu}>
        <StyledUserSettingsAvatarBackgroundIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite/sprite.svg#icon-avatar-bg'
            }
          ></use>
        </StyledUserSettingsAvatarBackgroundIcon>
        <StyledUserSettingsAvatarIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-avatar'
            }
          ></use>
        </StyledUserSettingsAvatarIcon>
      </StyledUserSettingsAvatarWrapper>

      {/* <StyledUserSettingsAvatarButton onClick={handleOpenUserMenu}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </StyledUserSettingsAvatarButton> */}

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleOpenLanguageMenu}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {t('user_settings.language')}
        </MenuItem>
        <Menu
          id="menu-language"
          anchorEl={anchorElLanguage}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElLanguage)}
          onClose={handleCloseLanguageMenu}
        >
          <MenuItem onClick={() => handleChangeLanguage('en')}>
            {t('user_settings.languages.english')}
          </MenuItem>
          <MenuItem onClick={() => handleChangeLanguage('uk')}>
            {t('user_settings.languages.ukrainian')}
          </MenuItem>
          <MenuItem onClick={() => handleChangeLanguage('es')}>
            {t('user_settings.languages.spanish')}
          </MenuItem>
        </Menu>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t('logout')}
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserSettings;
