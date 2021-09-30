import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProjectContext = createContext();

const ProjectContextProvider  = (props) => {

    const [projects, setProjects] = useState([
        {id:uuidv4(), job_no: 'Sunray 12345', project_info: '1000s of general contractors', customer_info: '89 Chiaroscuro Rd, Portland, USA', document_status: 'unmatchable customer service and impeccable', action_items: 'SunRay will make sure that notices are issued timely, properly'},
        {id:uuidv4(), job_no: 'Founder 3345 ', project_info: 'General Contractors, subcontractors', customer_info: '90 Chcago, US', document_status: 'DONT EXPOSE YOURSELF.SECURE YOUR LIEN AND BOND CLAIM RIGHTS', action_items: 'suppliers trust SunRay to get them paid'},
        {id:uuidv4(), job_no: 'Sunray 5455245 ', project_info: 'Premium Contractors, subcontractors', customer_info: '78 North, United Status', document_status: 'We are loved by businesses of all sizes for our unmatchable customer service and impeccable research. ', action_items: 'Get Preliminary Notice, Mechanics in your state.        '},
    ]);
  
    useEffect(()=> {
        setProjects(JSON.parse(localStorage.getItem('projects')))
    },[]);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    });

    const sortedProjects = projects ? projects.sort((a,b)=>(a.job_no < b.job_no ? -1 : 1)):[];

    const addProject = (job_no, project_info, customer_info, document_status, action_items) => {
        setProjects([...sortedProjects , {id:uuidv4(), job_no, project_info, customer_info, document_status, action_items}]);
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