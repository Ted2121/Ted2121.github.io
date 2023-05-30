import { Box, Divider } from '@mui/material'
import React from 'react'
import ProjectsCarousel from '../components/ProjectsCarousel'
import ProjectDescription from '../components/ProjectDescription'
import projectsData from '../data/projectsData';

function Projects() {
  const projects = projectsData;

  return (
    <>
      <Box sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }} id="projects">
        <Divider sx={{ width: "70%" }}>Projects</Divider>
      </Box>
      <Box>
        <ProjectsCarousel projects={projects}/>
        <ProjectDescription projects={projects}/>

      </Box>
    </>
  )
}

export default Projects