import { Box, Divider } from '@mui/material'
import React, { useState } from 'react'
import ProjectsCarousel from '../layouts/ProjectsCarousel'
import ProjectDescription from '../layouts/ProjectDescription'
import projectsData from '../data/projectsData';
import SectionDivider from '../components/SectionDivider';

function Projects() {
  const projects = projectsData;
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <>
      <Box sx={{ display: "flex", marginTop: "30px", justifyContent: "center" }} id="projects">
        <SectionDivider text='Projects' />
      </Box>
      <Box>
        <ProjectsCarousel projects={projects} setCurrentProject={setCurrentProject} />
        <ProjectDescription currentProject={currentProject} />

      </Box>
    </>
  )
}

export default Projects;