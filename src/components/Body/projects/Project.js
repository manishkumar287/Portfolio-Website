import React from 'react'
import { ProjectData } from '../../../data/projects'
import Separator from '../../common/Separator';
import ProjectCard from './project-card';
import './project.css'

function Project() {
    const data = ProjectData;
    return (
        <div className='projects'>
        <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return(
                        <ProjectCard project={project}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
