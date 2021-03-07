import React from 'react';

function AddMovie({ addTheMovie }) {

    const titleRef = React.useRef();
    const directorRef = React.useRef();
    const hasOscarRef = React.useRef(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        let title = titleRef.current.value;
        let director = directorRef.current.value;
        let hasOscar = hasOscarRef.current.checked;

        addTheMovie({ title, director, hasOscar});

        titleRef.current.value = '';
        directorRef.current.value = '';
        hasOscarRef.current.checked = false;
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {/* Un -Controlled components */}
            <label>Title</label>
            <input type="text" ref={titleRef}/>

            <label>Director</label>
            <input type="text" ref={directorRef} />

            <label>Oscar Awarded</label>
            <input type="checkbox" ref={hasOscarRef} />

            <button type="submit">Create</button>
        </form>
    )
}

export default AddMovie;