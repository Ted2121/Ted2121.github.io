import React from 'react';
import ProjectSectionText from '../components/ProjectSectionText';
import SectionDivider from '../components/SectionDivider';
import { Box, Typography } from '@mui/material';

function ProjectSection({ id, dividerText, contentText, images }) {
    return (
        <div id={id} className='project-section'>
            <SectionDivider text={dividerText} />
            <ProjectSectionText text={contentText} />
            {/* images */}
            {images?.map((image, index) => (
                <Box 
                key={index}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '20px',

                }}>
                    <picture key={index}>
                        <img
                            src={image.url}
                            alt={image.alt}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    </picture>
                    <Typography sx={{
                        mt: '5px',
                        fontSize: '.9rem',
                        textAlign:'center'
                    }}>
                        {image.alt}
                    </Typography>

                </Box>
            ))}
        </div>
    )
}

export default ProjectSection;