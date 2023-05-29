import { Box } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from './ProjectCard'

function ProjectsCarousel() {
    const responsive = {
        uhd: {
            breakpoint: { max: 3840, min: 2560 },
            items: 8,
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

    return (
        <Box sx={{ justifyContent: "center", alignItems: "center", padding: "20px", marginTop: "30px"}}>
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
            >
                <ProjectCard text="fcnbwerufhre" />
                <ProjectCard text="gergregg" />
                <ProjectCard text="gqrewgqreyur" />
                <ProjectCard text="weqrewrewre" />
                <ProjectCard text="h6yu6ertuywrywr" />
                

            </Carousel>
        </div>
            </Box>
        </Box>
    )
}



export default ProjectsCarousel