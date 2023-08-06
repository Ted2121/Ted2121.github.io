import { Box, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProjectTags from '../components/ProjectTags';
import ProjectSection from './ProjectSection';
import BackToButton from '../components/BackToButton';

function ProjectDescription({ currentProject }) {
  const sectionTags = currentProject ? currentProject.sections?.map((section) => section.tag) : undefined;

  return (
    <>
      {currentProject && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px"
          }}>
          <Paper
            sx={{
              width: { xs: "88%" },
              display: 'flex',
              flexDirection: 'column',
              rowGap: 3,
              p: '10px',
              alignItems: 'center',
              backgroundColor: 'grey.main'
            }}>
            <Typography
              id='title'
              variant='h2'
              sx={{
                textAlign: 'center'
              }}>
              {currentProject.title}
            </Typography>
            <ProjectTags sectionTags={sectionTags} />

            {currentProject.sections?.map((section, index) => (
              <ProjectSection
                key={index}
                id={index}
                dividerText={section.title}
                contentText={section.text}
              />
            ))}
            <BackToButton index='title' />
          </Paper>
        </Box>
      )}
    </>
  )
}

export default ProjectDescription;