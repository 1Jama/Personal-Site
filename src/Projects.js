import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import avatar from './av.jpg';
import { ProjectData } from './ProjectData';
import { IoBuildOutline } from 'react-icons/io5';

function Projects() {
  const [projectData, setProjectData] = useState(ProjectData);

  const tech = (techArray) => {
    const allTech = [];
    for (let i = 0; i < techArray.length; i++) {
      allTech.push(
        <span className='text-xs inline-flex items-center font-bold leading-sm uppercase px-2 py-1 bg-blue-200 text-blue-700 rounded-full mr-2 mb-2 font-roboto'>
          {techArray[i]}
        </span>
      );
    }
    return allTech;
  };

  return (
    <div className='projects'>
      <div className='projectsHeader'>
        <h1>Projects</h1>
        <IoBuildOutline className='wrenchLogo' />
      </div>
      <p>Here are projects I have worked on recently.</p>
      <div className='projectsContainer'>
        {projectData.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              technology={tech(project.technology.split(' '))}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
