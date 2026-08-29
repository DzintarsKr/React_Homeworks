import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // Убираем фокус с кнопки перед открытием Dialog
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Верхняя панель */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Мой React + Material UI проект
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Основная часть */}
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 5,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Добро пожаловать!
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Это простое приложение, созданное с помощью React и Material UI.
          </Typography>

          <Button variant="contained" onClick={handleOpen}>
            Открыть диалог
          </Button>
        </Box>
      </Container>

      {/* Диалоговое окно */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          Диалоговое окно
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="dialog-description">
            Это диалоговое окно Material UI. Вы можете закрыть его с помощью
            кнопки ниже.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            Отмена
          </Button>

          <Button
            onClick={handleClose}
            variant="contained"
            autoFocus
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;