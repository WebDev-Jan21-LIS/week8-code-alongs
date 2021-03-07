import React from 'react';
import { addProject, uploadFile } from '../api';
import { toast } from 'react-toastify';

class AddProject extends React.Component {

   // const nameRef = React.useRef();
   // const descriptionRef = React.useRef();
    state = {
        title: '',
        description: '',
        imageUrl: 'http://some'
    }

    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { title, description, imageUrl } = this.state;
        const uploadData = new FormData();
        uploadData.append('file', imageUrl);

        uploadFile(uploadData).then((response) => {
            const newProject = {
                title: title,
                description: description,
                imageUrl: response.data.fileUrl
            }

            addProject(newProject).then(() => {
                toast.success('Project created!');
                this.props.history.push('/projects');
            });
        })
    }

    handleFileChange = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            imageUrl: event.target.files[0]
        });
    }

    render() {
        const { title, description } = this.state; 
        return (
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.handleChange} />

                <label>Description</label>
                <input type="text" name="description" value={description} onChange={this.handleChange}  />

                <label>Image</label>
                <input type="file" onChange={this.handleFileChange} />

                <button type="submit">Create</button>
            </form>
        )
    }

}

export default AddProject;