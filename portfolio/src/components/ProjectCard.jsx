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
    const smWidth = 300;
    const smHeight = smWidth / 0.75;
    const lgWidth = 325;
    const lgHeight = lgWidth / 0.75;
    const xlWidth = 375;
    const xlHeight = xlWidth / 0.80;

    function onImageClick() {
        handleOnImageClick(project);
    }

    return (
        <Card sx={{
            minWidth: { xs: xsWidth, sm: smWidth, lg: lgWidth, xl: xlWidth },
            minHeight: { xs: xsHeight, sm: smHeight, lg: lgHeight, xl: xlHeight },
            maxWidth: { xs: xsWidth, sm: smWidth, lg: lgWidth, xl: xlWidth },
            maxHeight: { xs: xsHeight, sm: smHeight, lg: lgHeight, xl: xlHeight },
            overflow: 'hidden',
            backgroundColor: 'grey.main'
        }}>
            <CardContent>
                <Toolbar variant="dense">
                    <Typography sx={{
                        textAlign: 'center',
                        fontSize: { xs: '1.3rem', md: '1.4rem', lg:'1.5rem', xl:'1.6rem' }
                    }}>
                        {project?.title}
                    </Typography>
                    <Box sx={{
                        fontSize: '1rem',
                        border: '1px solid black',
                        backgroundColor: 'white.main',
                        color: 'black.main'
                    }}>
                    </Box>
                </Toolbar>
                <Box sx={{
                    display:'flex',
                    justifyContent:'center',
                    width:'100%',
                    height:'100%'
                }}>
                    <picture onClick={onImageClick}>
                        <img
                            src={project?.cardImageUrl}
                            alt={project?.cardImageAlt}
                            style={{ maxWidth: '100%', maxHeight: '100%', width:'100%', height:'100%' }} />
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