import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage, setLanguage } from '../../redux/global/globalSlice';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { StyledToggleLanguageButton } from './ToggleLanguage.styled';

const ToggleLanguage = () => {
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    document.activeElement.blur();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = language => {
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
    handleClose();
  };

  return (
    <div>
      <StyledToggleLanguageButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {language.toUpperCase()}
      </StyledToggleLanguageButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleChangeLanguage('en')}>
          {t('languages.english')}
        </MenuItem>
        <MenuItem onClick={() => handleChangeLanguage('uk')}>
          {t('languages.ukrainian')}
        </MenuItem>
        <MenuItem onClick={() => handleChangeLanguage('es')}>
          {t('languages.spanish')}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ToggleLanguage;
