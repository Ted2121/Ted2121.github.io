import './styles/App.css'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './layouts/Sidebar';
import AboutMe from './sections/AboutMe';
import { Box } from '@mui/system';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <main className="content">
              <AboutMe />
              <Projects />
              <Contact />
            </main>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
