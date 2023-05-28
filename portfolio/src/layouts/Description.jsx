import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ExternalProfiles from '../components/ExternalProfiles';

function Description() {
  return (
   <>
      <Box
      sx={{
        display: "inline-block",
      }}>
        <Typography variant="h1" component="h1" fontWeight="500">
          Hi, I'm Teodor
        </Typography>
        <Typography variant="h3" component="h2" fontWeight="300"
        >
          Software Engineer
        </Typography>
        <Typography 
        variant="h4" 
        component="h5" 
        fontWeight="300"
        sx={{
          width: "auto",
          maxWidth: {xl: 500, sm: 400, xs: 300},
          marginTop: "40px",
          marginRight: "0px"
        }}>
        My journey as a programmer started with backend development, where I built a strong sense of structure and good practices in the code I write. Later on, I applied those practices to frontend development as well. I am passionate about architecture and infrastructure and I strive to learn more everyday so I can build better software systems.
        </Typography>
        <ExternalProfiles sx={{display: {sm: "none"}, marginTop: '20px'}}/>
     
      </Box>
   </>
  )
}

export default Description