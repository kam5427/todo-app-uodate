import React from 'react';
import { Link } from 'react-router-dom'
const projects = [
    {
        id: 1,
       name: "Anaconda",
       difficulty: "Hard",
    },
    {
        id: 2,
        name: "Dragon",
        difficulty: "Hardcore",
    }
]
const Project = () => {
    return (
        <div className="Project">

            {projects.map((project)=> {
                return (
                 <Link key={project.id} to={project.name}>
                     <div >{project.name} ({project.difficulty})</div>
                 </Link>
                )
            })
            }
        </div>
    )
}

export default Project
