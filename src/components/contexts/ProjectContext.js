import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectContext = createContext();

const ProjectContextProvider  = (props) => {

    const [projects, setProjects] = useState([
    ]);

    useEffect(()=> {
        setProjects(JSON.parse(localStorage.getItem('projects')))
    },[]);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    });

    const sortedProjects = projects;

    const addProject = (job_no, project_info, customer_info, document_status, action_items) => {
        setProjects([...projects , {id:uuidv4(), job_no, project_info, customer_info, document_status, action_items}]);
    }

    const deleteProject = (id) => {
        setProjects(projects.filter(project => project.id !== id));
    }

    const updateProject = (id, updateProject) => {
        setProjects(projects.map((project) => project.id === id ? updateProject : project));
    }

    return (
        <ProjectContext.Provider value={{sortedProjects, addProject, deleteProject, updateProject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;