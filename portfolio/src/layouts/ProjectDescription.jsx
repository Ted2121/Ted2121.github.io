import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import SectionDivider from '../components/SectionDivider'
import ProjectSectionText from '../components/ProjectSectionText';
import ProjectTags from '../components/ProjectTags';
import ProjectSection from './ProjectSection';
import { Description } from '@mui/icons-material';
import BackToButton from '../components/BackToButton';

function ProjectDescription({ currentProject }) {
  const sectionTags = currentProject.sections?.map((section) => section.tag);
  // const [indexInView, setIndexInView] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px"
      }}>
      <Paper sx={{
        width: { xs: "88%" },
        display: 'flex',
        flexDirection: 'column',
        rowGap: 3,
        p: '10px',
        alignItems: 'center'
      }}>
        <Typography
          id='title'
          variant='h2' sx={{
            textAlign: 'center'
          }}>
          {currentProject?.title}
        </Typography>
        <ProjectTags sectionTags={sectionTags} />

        {currentProject.sections?.map((section, index) => (
          <ProjectSection
            key={index}
            id={index}
            dividerText={section.title}
            contentText={section.text} />))}
        <BackToButton index='title' />
      </Paper>
    </Box>
  )
}

export default ProjectDescription