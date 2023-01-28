import React, {useState} from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    
    const getPokemon = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => response.json())
        .then(response => {
        setPokemon(response.results);
        })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <button onClick={() => getPokemon()}>Fetch Pokemon</button>
            <div>
                {pokemon.map((pokemon, index) => (
                    <ul>
                        <li key={index}>{pokemon.name}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
} 
export default Pokemon;