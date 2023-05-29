import './styles/styles.css'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './layouts/Sidebar';
import AboutMe from './sections/AboutMe';
import { Box } from '@mui/system';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ProjectsCarousel from './components/ProjectsCarousel';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            minHeight: '100vh',
          }}
        >
          <Sidebar />
          <Box
            component="main"
            sx={{
              overflow: 'auto',
              padding: 0,
              gridColumn: '2 / span 1'
            }}
          >
            <AboutMe />
            <Projects />
            <Contact />
            {/* <ProjectsCarousel /> */}
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
