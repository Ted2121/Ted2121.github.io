import './styles/styles.css'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './layouts/Sidebar';
import AboutMe from './sections/AboutMe';
import { Box } from '@mui/system';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import BackToButton from './components/BackToButton';

function App() {
  const [theme, colorMode] = useMode();

  const borderColor = theme.palette.mode === 'light' ? 'black' : 'white';

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
            {console.log(borderColor)}
            <Box sx={{
              display:'flex',
              width:'100%',
              justifyContent:'center',
              mb:'20px'
            }}>
              <Box sx={{
                display: 'inline-block',
                border: `1px solid ${borderColor}`,
              }}>
                <BackToButton index='about-me' />
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
