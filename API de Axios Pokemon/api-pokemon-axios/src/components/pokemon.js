import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    
    const getPokemon = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
			.then(response => setPokemon(response.data.results));
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