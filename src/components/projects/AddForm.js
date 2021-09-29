import { Form, Button } from "react-bootstrap";
import { ProjectContext } from '../contexts/ProjectContext';
import { useContext, useState } from 'react';

const AddForm = () =>{

    const {addProject} = useContext(ProjectContext);

    const [newProject, setNewProject] = useState({
        job_no:"", project_info:"", customer_info:"", document_status:"", action_items:""
    });

    const onInputChange = (e) => {
        setNewProject({...newProject,[e.target.name]: e.target.value})
    }

    const {job_no, project_info, customer_info, document_status, action_items} = newProject;
    const [jobNoError, setJobNoError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (job_no === "") {
            setJobNoError('Job/Acc No cant be blank!')
            return true;
        } else {
            setJobNoError(null);
            addProject(job_no, project_info, customer_info, document_status, action_items);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="JOB/ACC NO *"
                    name="job_no"
                    value={job_no}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            { jobNoError && <p>{jobNoError}</p> }
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="PROJECT INFO"
                    name="project_info"
                    value={project_info}
                    onChange = { (e) => onInputChange(e)}  
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="CUSTOMER INFO"
                    rows={3}
                    name="customer_info"
                    value={customer_info}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="CURRENT DOCUMENT STATUS"
                    name="document_status"
                    value={document_status}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ACTION ITEMS / DUE DATES"
                    name="action_items"
                    value={action_items}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Project
            </Button>
        </Form>
    );
}

export default AddForm;