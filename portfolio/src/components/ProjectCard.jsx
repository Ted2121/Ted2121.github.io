import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';



function ProjectCard({ project, handleOnImageClick }) {
    const xsWidth = 275;
    const xsHeight = xsWidth / 0.75;
    const lgWidth = 300;
    const lgHeight = xsWidth / 0.7;
    const xlWidth = 375;
    const xlHeight = xlWidth / 0.81;

    function onImageClick() {
        handleOnImageClick(project);
    }

    return (
        <Card sx={{
            minWidth: { xs: xsWidth, lg: lgWidth, xl: xlWidth },
            minHeight: { xs: xsHeight, lg: lgHeight, xl: xlHeight },
            maxWidth: { xs: xsWidth, lg: lgWidth, xl: xlWidth },
            maxHeight: { xs: xsHeight, lg: lgHeight, xl: xlHeight },
            overflow:'hidden'
        }}>
            <CardContent>
                <Toolbar variant="dense">

                    <Typography variant="h3" component="h5" sx={{
                    }}>
                        {project?.title}
                    </Typography>
                    <Box sx={{
                        fontSize:'1rem',
                        border:'1px solid black',
                        backgroundColor:'white.main',
                        color:'black.main'
                    }}>

                    </Box>
                </Toolbar>
                <Box>
                    <picture onClick={onImageClick}>
                        <img
                            src={project?.cardImageUrl}
                            alt={project?.cardImageAlt}
                            style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </picture>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <IconButton aria-label="quizbytesdemo" size="large">
                            <OpenInNewIcon fontSize="large" />
                        </IconButton>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <IconButton aria-label="quizbytesrepo" size="large">
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </a>
                </Box>

            </CardContent>
        </Card >
    );
}

export default ProjectCard