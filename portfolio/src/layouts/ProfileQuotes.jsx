import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import discoveringAssembly from '../assets/discoveringAssembly.png'
import debuggingTacticsImage from '../assets/DebuggingTactics.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';


export default function ProfileQuotes() {
  const steps = [
    {
      image: `${discoveringAssembly}`,
      alt: 'Discovering Assembly'
    },
    {
      image: `${debuggingTacticsImage}`,
      alt: 'Debugging techniques'
    },
    {
      quote: 'Create an ad',
      image: ``,
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const maxSteps = steps.length;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  function handleShowQuotesClick() {
    setIsHidden((prevState) => !prevState);
  }


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper elevation={8} sx={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'white.main' }}>
    <Box sx={{ maxWidth: { xl: 500, sm: 400, xs: 300 }, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'grey.main',
        }}
      >
        <Box
          onClick={isMobile ? handleShowQuotesClick : undefined}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: { xs: 300, sm: 400, lg: 500 },
          }}
        >
          <Typography>
            Here are some quotes I feel inspired by
          </Typography>
          {isMobile && ( 
            <IconButton>
              {isHidden ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          )}
        </Box>
      </Paper>
      {(!isMobile || !isHidden) && ( // Render the content only on mobile and when not hidden
          <>
            <Box sx={{
              height: { xl: 500, sm: 400, xs: 300 },
              width: { xl: 500, sm: 400, xs: 300 },
              p: 0
            }}>
              <picture>
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].alt}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </picture>
            </Box>
            <MobileStepper
              variant="dots"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{ bgcolor: 'grey.dark' }}
              nextButton={
                <Button
                  size="large"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft style={{ fontSize: '3rem' }} />
                  ) : (
                    <KeyboardArrowRight style={{ fontSize: '3rem' }} />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight style={{ fontSize: '3rem' }} />
                  ) : (
                    <KeyboardArrowLeft style={{ fontSize: '3rem' }} />
                  )}
                </Button>
              }
            />
          </>
        )}
      </Box>
    </Paper>
  );
}