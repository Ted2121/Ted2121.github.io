import { Box, Typography } from '@mui/material';
import React from 'react';

function ProjectTags({sectionTags}) {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: 2,
        justifyContent:'center'
      }}>
        {sectionTags?.map((tag, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: '8px',
              border: '1px solid white',
              padding: '5px 8px',
              backgroundColor: 'grey.main',
              maxWidth:'90%'
            }}>
              <Typography sx={{
                color:'white.main'
              }}>
  
            {tag}
              </Typography>
          </Box>
        ))}
      </Box>
  )
}

export default ProjectTags;