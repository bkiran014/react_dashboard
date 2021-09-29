import { Form, Button } from "react-bootstrap";
import { ProjectContext } from '../contexts/ProjectContext';
import { useContext, useState } from 'react';

const EditForm = ({theProject}) =>{

    const id = theProject.id;

    const [job_no, setJobNo] = useState(theProject.job_no);
    const [project_info, setProjectInfo] = useState(theProject.project_info);
    const [customer_info, setCustomerInfo] = useState(theProject.customer_info);
    const [document_status, setDocumentStatus] = useState(theProject.document_status);
    const [action_items, setActionItems] = useState(theProject.action_items);

    const {updateProject} = useContext(ProjectContext);
    const updatedProject = {id, job_no, project_info, customer_info, document_status, action_items};
    const [jobNoError, setJobNoError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (job_no === "") {
            setJobNoError('Job/Acc No cant be blank!')
            return true;
        } else {
            setJobNoError(null);
            updateProject(id, updatedProject);
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
                    onChange = { (e) => setJobNo(e.target.value)}
                />
            </Form.Group>
            { jobNoError && <p>{jobNoError}</p> }
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="PROJECT INFO"
                    name="project_info"
                    value={project_info}
                    onChange = { (e) => setProjectInfo(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="CUSTOMER INFO"
                    rows={3}
                    name="customer_info"
                    value={customer_info}
                    onChange = { (e) => setCustomerInfo(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="CURRENT DOCUMENT STATUS"
                    name="document_status"
                    value={document_status}
                    onChange = { (e) => setDocumentStatus(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="ACTION ITEMS / DUE DATES"
                    name="action_items"
                    value={action_items}
                    onChange = { (e) => setActionItems(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Project
            </Button>
        </Form>
    );
}

export default EditForm;