import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'



function ProjectCard({ project }) {
    const aspectRatio = 0.8;
    const xsWidth = 275;
    const xsHeight = xsWidth / aspectRatio;
    const lgWidth = 300;
    const lgHeight = xsWidth / aspectRatio;
    const xlWidth = 375;
    const xlHeight = xlWidth / aspectRatio;

    return (
        <Card sx={{
            minWidth: { xs: xsWidth, lg: lgWidth, xl: xlWidth },
            minHeight: { xs: xsHeight, lg: lgHeight, xl: xlHeight },
            maxWidth: { xs: xsWidth, lg: lgWidth, xl: xlWidth },
            maxHeight: { xs: xsHeight, lg: lgHeight, xl: xlHeight },
        }}>
            <CardContent>
                <Toolbar variant="dense">

                    <Typography variant="h3" component="h5">
                        {project.title}
                    </Typography>
                </Toolbar>
                <Box>
                    <img src={project.cardImageUrl}></img>
                </Box>

            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card >
    );
}

export default ProjectCard