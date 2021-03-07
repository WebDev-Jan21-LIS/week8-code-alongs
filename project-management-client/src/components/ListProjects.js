import React from 'react';
import { getAllProjects, deleteProject } from '../api';
import { Link } from 'react-router-dom';
import { Ul, Image } from '../styles/list';
import DeleteProject from './DeleteProject';

class ListProjects extends React.Component {
    
    state = {
        projects: []
    }

    componentDidMount() {
        getAllProjects().then((response) => {
            this.setState({
                projects: response.data
            });
        })
    }

    setProjectToDelete = (id) => {
        this.setState((state) => ({
            projects: state.projects.map(
                project => project._id == id 
                ? {...project, beingDeleted: true} 
                : project
            )
        }))
    }

    setProjectToNotDelete = (id) => {
        this.setState((state) => ({
            projects: state.projects.map(
                project => project._id == id 
                ? {...project, beingDeleted: false} 
                : project
            )
        }))
    }

    handleDeleteProject = (id) => {
        deleteProject(id).then(() => {
            this.setState((state) => ({
                projects: state.projects.filter(project => project._id !== id)           
            }))
        });
    }
        
    render() {
        return (
            <Ul primary>    
                {this.state.projects.map((project) => {
                    return (
                        <li 
                        key={project._id}>
                            <div style={{ display : project.beingDeleted ? 'none' : 'block' }}>
                                <Link to={`/projects/${project._id}`}>
                                {project.title}
                                <Image src={project.imageUrl} />
                                </Link>
                                <DeleteProject 
                                softDelete={this.setProjectToDelete}
                                undoDelete={this.setProjectToNotDelete}
                                hardDelete={this.handleDeleteProject}
                                id={project._id} 
                             />
                            </div>
                        </li>

                    )
                })}
            </Ul>
        )
    }
}

export default ListProjects;