import { useState, useEffect } from "react";

function FilmsPage() {
    const[list, setList] = useState([])
    
    const [searchDirector, setSearchDirector] = useState(" ")

function getFilms(){
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then((response)=> {
        return response.json();
    })
    .then((data) => {
        console.log('Fetched films:', data);
        setList( data )
    })
    .catch((error) => {
        console.log('Error fetching films:', error);
        this.setState({ error: error.message });
    });
}

    useEffect(()=> {
        getFilms();
    }, [])

    return (
    <div>
        <h1>Studio Ghibli Films</h1>
        <form action="">
            <div className="form-group">
                <label htmlFor="searchDirector">Director:</label>
                <select
                name="searchDirector"
                id="searchDirector"
                value={searchDirector}
                onChange={()}
                >
                    <option value="">All</option>
                </select>
            </div>
        </form>
        <ul>
            {list.map((film) => (
            <li key ={film.id}>{film.title}</li>
        ))}
        </ul>
    </div>
    );
}


export default FilmsList;