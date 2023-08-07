import { Box, Typography, useAutocomplete } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from '../components/ProjectCard'

function ProjectsCarousel({ projects, setCurrentProject }) {
    const responsive = {
        uhd: {
            breakpoint: { max: 3840, min: 2560 },
            items: 6,
        },
        qhd: {
            breakpoint: { max: 2560, min: 1920 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1920, min: 1200 },
            items: 3,
        },
        largeTablet: {
            breakpoint: { max: 1200, min: 900 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 900, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    function handleBeforeChange() {
        setCurrentProject(null);
    }

    function handleImageClick(project) {
        setCurrentProject(project);
        console.log(project);
    }

    return (
        <Box sx={{ justifyContent: "center", alignItems: "center", padding: "20px", marginTop: "20px" }}>
            <Box sx={{ overflow: 'hidden' }}>
                <div className='carousel-wrapper'>
                    <Carousel
                        containerClass="carousel-container"
                        responsive={responsive}
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        transitionDuration={500}
                        itemClass="carousel-item"
                        beforeChange={handleBeforeChange}>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} handleOnImageClick={handleImageClick} />
                        ))}
                    </Carousel>
                </div>
            </Box>
            <Typography sx={{
                mt: '20px',
                fontSize: '0.8rem'
            }}>
                * Click on project image for more details
            </Typography>
        </Box>
    )
}



export default ProjectsCarousel