import React,{ useContext, useEffect, useState } from 'react';
import { Modal, Button, Alert, Row, Form } from 'react-bootstrap';
import { ProjectContext } from '../contexts/ProjectContext';
import Project from './Project';
import AddForm from './AddForm';
import { FaPlus, FaSearch } from 'react-icons/fa';

const ProjectList = () => {

    const {sortedProjects} = useContext(ProjectContext);
    const [showAlert, setShowAlert] = useState(false);
    const [search, setSearch] = useState(``);
    const [show, setShow] = useState(false);
    const [projects, setProjects] = React.useState(sortedProjects);
    
    const handleShow    = ()  => setShow(true);
    const handleClose   = ()  => setShow(false);
    
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }
    
    useEffect(() => {
        setProjects(sortedProjects);
        handleClose();
    
        return () => {
            handleShowAlert();
        }
    }, [sortedProjects]);


    return (
        <>
        <div className="table-title">
            <Row className="m-2">
                <div className="col-sm-6">
                    <h4>LATEST PROJECTS</h4>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className="float-right btn btn-primary" data-toggle="modal" style={{background:"#2c5998",color:"#fff",border:"none",padding: '5px'}}><FaPlus /><span>Add New Project</span></Button>					
                </div>
            </Row><hr/>
            <Row>
                <div className="col-md-6 mb-4 mx-auto">
                    <Form className="form-inline">
                        <FaSearch />
                        <input 
                            onChange={e => {
                                const searchedProjects = sortedProjects.filter(project => {
                                    return (project.job_no.toLowerCase().includes(e.target.value.toLowerCase()) || project.project_info.toLowerCase().includes(e.target.value.toLowerCase()) || project.customer_info.toLowerCase().includes(e.target.value.toLowerCase()) || project.document_status.toLowerCase().includes(e.target.value.toLowerCase()) || project.action_items.toLowerCase().includes(e.target.value.toLowerCase()));
                                });
                                setProjects(searchedProjects);
                                setSearch(e.target.value);
                            }}
                            className="form-control form-control-sm ml-3 w-75" 
                            type="text" 
                            placeholder="Search with W/O #, Job Name, Job Address, Job #, Customer Name" 
                            aria-label="Search" 
                            value={search}
                        />
                    </Form>
                </div>
            </Row>
        </div>

        <Alert show={showAlert} variant="success">
            Project List Updated Succefully!
        </Alert>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>JOB/ACC NO</th>
                    <th>PROJECT INFO</th>
                    <th>CUSTOMER INFO</th>
                    <th>CURRENT DOCUMENT STATUS</th>
                    <th>ACTION ITEMS / DUE DATES</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                    {
                        projects.map(project => (
                            <tr key={project.id}>
                                <Project project={project} />
                            </tr>
                        ))  
                    }
            </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
            </Modal.Body>
        </Modal>
        </>
    );
}

export default ProjectList;