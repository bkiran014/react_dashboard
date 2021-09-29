import { useContext, useState, useEffect } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Project = ({project}) => {

    const {deleteProject} = useContext(ProjectContext)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [project]);

    return (
        <>
            <td>{project.job_no}</td>
            <td>{project.project_info}</td>
            <td>{project.customer_info}</td>
            <td>{project.document_status}</td>
            <td>{project.action_items}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><FaEdit /></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteProject(project.id)}  className="btn text-danger btn-act" data-toggle="modal"><FaTrash /></button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Project
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theProject={project} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Project;