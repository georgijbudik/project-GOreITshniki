import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, setTheme } from '../../redux/global/globalSlice';

import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';

import { StyledThemeToggleButton } from './ThemeToggle.styled';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

  const handleThemeChange = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
  };

  return (
    <StyledThemeToggleButton onClick={handleThemeChange}>
      {currentTheme === 'dark' ? (
        <BedtimeIcon color="warning" />
      ) : (
        <LightModeIcon color="warning" />
      )}
    </StyledThemeToggleButton>
  );
};

export default ThemeToggle;
