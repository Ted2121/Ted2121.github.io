import React from 'react';
import ProjectSectionText from '../components/ProjectSectionText';
import SectionDivider from '../components/SectionDivider';

function ProjectSection({ id, dividerText, contentText, images }) {
    return (
        <div id={id} className='project-section'>
            <SectionDivider text={dividerText} />
            <ProjectSectionText text={contentText}/>
            {/* images */}
        </div>
    )
}

export default ProjectSection;