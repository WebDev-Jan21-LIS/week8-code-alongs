import React from 'react';
import Card from './Card';
import AddMovie from './AddMovie';

function List() {
    const [movies, setMovies] = React.useState([
        { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg", hasOscar: true },
        { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante",  hasOscar: false },
        { id: "z2uykusRE", title: "Titanic", director: "James Cameron", hasOscar: true }
      ]);
    
    const [showOscarAwarded, setShowOscarAwarded] = React.useState(false);

    //first return an object with the current state
    //second return a function that will allow us to set the state
  
    const toggleOscarAwarded = () => {
      setShowOscarAwarded(!showOscarAwarded);
    }

    const deleteMovieHandler = (id) => {
        setMovies((movies) => 
            movies.filter(movie => movie.id !== id));
    }

    const addMovieHandler = (theMovieThatComesFromAddMovie) => {
        setMovies((movies) => 
            movies.concat(theMovieThatComesFromAddMovie));
    }


    const filteredMovies = movies.filter((movie) => {
        return movie.hasOscar === showOscarAwarded
    });

    return (
        <>
            {filteredMovies.map((movie)=> {
                return <Card 
                    key={movie.id} 
                    {...movie}
                    deleteMovie={() => deleteMovieHandler(movie.id)}
                />
            })}
            <button onClick={addMovieHandler}>Add Movie</button>
            <button onClick={toggleOscarAwarded}>
                {
                    showOscarAwarded
                    ? "Hide Oscar Awarded"
                    : "Show Oscar Awarded"
                }
            </button>
            <AddMovie addTheMovie={addMovieHandler} />
        </>
    )
}

export default List;