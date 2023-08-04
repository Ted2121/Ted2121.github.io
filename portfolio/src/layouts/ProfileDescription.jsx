import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import ExternalProfiles from '../components/ExternalProfiles';

function ProfileDescription() {
  const theme = useTheme();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const h1FontSize = theme.typography.h1.fontSize;
  const h3FontSize = theme.typography.h3.fontSize;
  const h4FontSize = theme.typography.h4.fontSize;

  // console.log(screenWidth)
  return (
    <>
      <Box
        sx={{
          display: "inline-block",
        }}>
        <Typography variant="h1" component="h1" fontWeight="500"
          sx={{
            fontSize: screenWidth >= theme.breakpoints.values.xxl ? '3.8rem' : h1FontSize,
          }}>
          Hi, I'm Teodor
        </Typography>
        <Typography variant="h3" component="h2" fontWeight="300"
          sx={{
            fontSize: screenWidth >= theme.breakpoints.values.xxl ? '2rem' : h3FontSize,
          }}
        >
          Software Engineer
        </Typography>
        <Typography
          variant="h4"
          component="h5"
          fontWeight="300"
          sx={{
            width: "auto",
            maxWidth: { xs: 300, sm: 400, xl: 500, xxl: 1000 },
            marginTop: "40px",
            marginRight: "0px",
            fontSize: screenWidth >= theme.breakpoints.values.xxl ? '2.5rem' : h4FontSize,
          }}>
          My journey as a programmer started with backend development, where I built a strong sense of structure and good practices in the code I write. Later on, I applied those practices to frontend development as well. I am passionate about architecture and infrastructure and I strive to learn more everyday so I can build better software systems.
        </Typography>
        <ExternalProfiles sx={{ display: { sm: "none" }, marginTop: '20px' }} />

      </Box>
    </>
  )
}

export default ProfileDescription