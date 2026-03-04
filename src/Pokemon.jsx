import { useState } from 'react'
import { useEffect } from 'react'
import "./index.css";

function Pokemon({pokemon}) {
/**
 * Pokemon Page https://pokeapi.co/
 * useEffect to fetch some pokemon, save your pokemon using useState
 * Create a pokemon component
 **/
 
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src ={pokemon.sprites.front_default}/>
    </div>
  )
}

export default Pokemon