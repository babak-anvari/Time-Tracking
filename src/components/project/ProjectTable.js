import React from 'react';
import PropTypes from "prop-types";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const ProjectTable = ({ identifiedProjects }) => (
    <>
        <p>Project List</p><br />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Address</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {identifiedProjects.map(project => (
                    <tr key={project._id} >
                        <td>{project.number}</td>
                        <td>Active</td>
                        <td>{project.address}</td>
                        <td>
                            <div className="deleteIcon" onClick={() => { }}><VisibilityOutlinedIcon /></div>
                        </td>
                        <td>
                            <div className="deleteIcon" onClick={() => { }}><EditRoundedIcon /></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table ><br />
    </>
)

export default ProjectTable;

ProjectTable.propTypes = {
    identifiedProjects: PropTypes.array.isRequired
};