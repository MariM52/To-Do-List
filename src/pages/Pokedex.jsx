import { useState } from 'react'
import { useEffect } from 'react'
import "../index.css";
import Pokemon from '../Pokemon';

function Pokedex() {
/**
 * Pokemon Page https://pokeapi.co/
 * useEffect to fetch some pokemon, save your pokemon using useState
 * Create a pokemon component
 **/
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
        try {
            //call pokeapi
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
            //converts data
            const data = await response.json();
            //saves data into state
            setPokemon(data);
        }   catch(error) {
            console.error("error fetching: ", error);
        }
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      {pokemon && <Pokemon pokemon={pokemon} />}
    </div>
  )
}

export default Pokedex