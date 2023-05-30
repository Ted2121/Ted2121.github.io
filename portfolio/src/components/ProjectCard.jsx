import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function ProjectCard({ text }) {
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
                
                <Typography variant="h5" component="div">
                    {text}
                </Typography>
                
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card >
    );
}

export default ProjectCard