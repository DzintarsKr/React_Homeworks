import { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Box,
} from '@mui/material';

import styled from '@emotion/styled';

// Светлая тема
const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#1976d2',
    },

    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },

    text: {
      primary: '#212121',
      secondary: '#666666',
    },
  },
});

// Тёмная тема
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#90caf9',
    },

    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },

    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
});

// Стилизованная кнопка через Emotion
const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};

  font-size: 16px;
  font-weight: 600;

  padding: 10px 24px;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function App() {
  // false = светлая тема
  // true = тёмная тема
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Переключение темы
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Выбираем текущую тему
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />

      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
          >
            {isDarkMode
              ? 'Включена тёмная тема'
              : 'Включена светлая тема'}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Нажмите на кнопку, чтобы изменить тему приложения.
          </Typography>

          <CustomButton
            type="button"
            onClick={toggleTheme}
          >
            {isDarkMode
              ? 'Включить светлую тему'
              : 'Включить тёмную тему'}
          </CustomButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;