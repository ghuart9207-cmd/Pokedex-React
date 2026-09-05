import './App.css'
import './components/Pokecard.css'
import { useState } from 'react';

import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color : "lightgreen",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color : "lightsalmon",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color : "lightblue",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color : "yellow",
  },
  {
    name: "mew",
    color : "violet",
  },
];

function App() {

  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  console.log(pokemonName);

  return (
  <div>
    <nav className='choix'>
      {pokemonList.map((pokemon) => (
          <ul key={pokemon.name}>
            <div className='nbchoix'>
              <p>{pokemon.name} </p>
              <button className='button' onClick={() => setPokemonName(pokemon.name)}>choise</button>
            </div>
          </ul>
        ))}
    </nav>
    <PokemonCard pokemon={pokemon} />
  </div>
  );
}

export default App;