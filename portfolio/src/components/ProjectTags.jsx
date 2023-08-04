import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';

function ProjectTags({ sectionTags }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      columnGap: 1,
      rowGap: 1,
      justifyContent: 'center',
    }}>
      {sectionTags?.map((tag, index) => (
        <Link
          to={`${index}`}
          key={index}
          smooth
          offset={-70}
          duration={500}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            width: "100%",
            flexBasis: 'content',
          }}
        >
          <Button
            variant='outlined'
            sx={{
              borderRadius: '16px',
              border: '1px solid white',
            }}>
            {tag}
          </Button>
        </Link>
      ))}
    </Box>
  )
}

export default ProjectTags;