import { Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import SectionDivider from '../components/SectionDivider'
import ProjectSectionText from '../components/ProjectSectionText';

function ProjectDescription({ currentProject }) {
  const sectionTags = currentProject.sections.map((section) => section.tag);

  const tags = (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      columnGap: 2,
      justifyContent:'center'
    }}>
      {sectionTags.map((tag, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: '8px',
            border: '1px solid white',
            padding: '5px 8px',
            backgroundColor: 'grey.main',
          }}>
            <Typography sx={{
              color:'white.main'
            }}>

          {tag}
            </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
      <Paper sx={{
        width: { xs: 275, sm: "88.4%" },
        display: 'flex',
        flexDirection: 'column',
        rowGap: 3,
        p: '10px',
        alignItems:'center'
      }}>
        <Typography variant='h2' sx={{
          textAlign: 'center'
        }}>
          {currentProject?.title}
        </Typography>
        {tags}
        <SectionDivider text='Description' />
        <ProjectSectionText text={currentProject?.description}/>
      </Paper>
    </Box>
  )
}

export default ProjectDescription