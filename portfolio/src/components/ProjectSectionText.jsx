import { Typography } from '@mui/material';
import React from 'react';

function ProjectSectionText({text}) {
  return (
    <Typography sx={{
        fontSize: {xs:'1rem', sm:'1.1rem'},
        width:{xs:'95%', sm:'90%', md:'80%'}
      }}>
        {text}
      </Typography>
  )
}

export default ProjectSectionText;