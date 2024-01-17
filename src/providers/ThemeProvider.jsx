import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/global/globalSlice';

import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: '#efede8',
          },
        }
      : {
          background: {
            default: '#040404',
          },
        }),
    border: {
      ...(mode === 'light'
        ? {
            primary: 'rgba(110, 110, 110, 0.32)',
          }
        : {
            primary: 'rgba(239, 237, 232, 0.2)',
          }),
    },
    text: {
      ...(mode === 'light'
        ? {
            primary: '#040404',
          }
        : {
            primary: '#efede8',
          }),
    },
  },
});

const AppThemeProvider = ({ children }) => {
  const mode = useSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default AppThemeProvider;
