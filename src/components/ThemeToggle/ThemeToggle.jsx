import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../../redux/global/globalSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const onModeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
  };

  return <button onClick={onModeChange}>Change Theme</button>;
};

export default ThemeToggle;
