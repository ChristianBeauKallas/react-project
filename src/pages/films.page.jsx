import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf, getFilmsStats } from "../helpers/film.helpers";
import { Link } from 'react-router-dom';

function FilmsPage() {
    const[list, setList] = useState([])
    const [searchDirector, setSearchDirector] = useState("")

function getFilms(){
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then((response)=> {
        return response.json();
    })
    .then((films) => {
        console.log('Fetched films:', films);
        setList( films)
    })
    .catch((error) => {
        console.log('Error fetching films:', error.message);
    });
}

    useEffect(()=> {
        getFilms();
    }, [])

    let filmsByDirector = filterFilmsByDirector(list, searchDirector)
    let directors = getListOf(list, "director")

    const { avg_score, total, latest } = getFilmsStats(list)

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
                onChange={(event) => setSearchDirector(event.target.value)}
                >
                    <option value="">All</option>
                    {directors.map((director, index) => {
                    return(
                        <option key={director+index} value={director}>{director}</option>
                    )
                    })}
                </select>
            </div>
        </form>
        <div>
        <div>
            <span># Of Films: </span>
            <span>{total}</span>
        </div>
        <div>
            <span>Average Rating: </span>
            <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
            <span>Latest Film: </span>
            <span>{latest}</span>
        </div>
        </div>
        <ul>
            {filmsByDirector.map((film) => (
            <li key={film.id}>
                <Link to={`film/${film.id}`}>{film.title}</Link>
            </li>
        ))}
        </ul>
    </div>
    );
}


export default FilmsPage;