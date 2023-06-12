import { useState, useEffect } from "react";

function FilmsList() {
    const[list, setList] = useState([])

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
    <ul>
        {list.map((film) => (
        <li key ={film.id}>{film.title}</li>
    ))}
    </ul>
    )}


export default FilmsList;