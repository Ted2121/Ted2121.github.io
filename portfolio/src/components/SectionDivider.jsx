import { Box, Divider } from '@mui/material';
import React from 'react';

function SectionDivider({text}) {
  return (
    <Box sx={{
        display:'flex',
        width:'100%',
        height:'100%',
        justifyContent:'center'
    }}>
        <Divider sx={{ width: "60%" }}>{text}</Divider>
    </Box>

  )
}

export default SectionDivider;