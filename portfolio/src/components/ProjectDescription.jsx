import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

function ProjectDescription({projects}) {

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px"}}>
        <Paper sx={{width: {xs: 275, sm: "88.4%"}}}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>



        </Paper>
    </Box>
  )
}

export default ProjectDescription