import React from 'react'

function Card({ title, director, hasOscar, deleteMovie }) {

    return (
        <div>
            <h2>Title: {title}</h2>
            <span>Director: {director}</span>
            {/* {
                hasOscar 
                ? <p>Got the Oscar award</p>
                : <p>Great movie, but no Oscar</p>
            } */}

            { hasOscar && <p>Got the Oscar award</p>}
            { !hasOscar && <p>Great movie, but no Oscar</p>}

            <div>
                <button onClick={deleteMovie}>Delete</button>
            </div>
        </div>
    )
}


export default Card
