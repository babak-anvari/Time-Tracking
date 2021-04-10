import React from 'react';
import PropTypes from "prop-types";
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom'

const ProjectTable = ({ identifiedProjects, findProjectById, setProjectComponentState }) => (
    <>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th>View</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {identifiedProjects.map(project => (
                    <tr key={project._id} >
                        <td>{project.number}</td>
                        <td>Active</td>
                        <td>{project.address}</td>
                        <td>
                            <div className="deleteIcon" onClick={() => { }}>
                                <Link to={`/project/${project._id}`}>
                                    <AssessmentOutlinedIcon />
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div className="deleteIcon" onClick={() => {
                                findProjectById(project._id);
                                setProjectComponentState('edit');
                            }}>
                                <EditRoundedIcon />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
)

export default ProjectTable;

ProjectTable.propTypes = {
    findProjectById: PropTypes.func.isRequired,
    identifiedProjects: PropTypes.array.isRequired,
    setProjectComponentState: PropTypes.func.isRequired
};