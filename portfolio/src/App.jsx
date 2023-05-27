import './styles/App.css'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './layouts/Sidebar';
import Stack from '@mui/material/Stack';
import AboutMe from './sections/AboutMe';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <main className="content">
          <Stack direction="row" spacing={20} alignItems="center">
        <Sidebar />
            <AboutMe />
            </Stack>
          </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
