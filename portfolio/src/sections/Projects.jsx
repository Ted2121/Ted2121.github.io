import { Box, Divider } from '@mui/material'
import React from 'react'
import ProjectsCarousel from '../components/ProjectsCarousel'
import ProjectDescription from '../components/ProjectDescription'

function Projects() {
  return (
    <>
      <Box sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }} id="projects">
        <Divider sx={{ width: "70%" }}>Projects</Divider>
      </Box>
      <Box>
        <ProjectsCarousel />
        <ProjectDescription />

      </Box>
    </>
  )
}

export default Projects