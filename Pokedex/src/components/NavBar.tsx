interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({pokemonList, setPokemonName}:NavBarProps ) {
  return (
  <nav className='choix'>
      {pokemonList.map((pokemon) => (
          <ul key={pokemon.name}>
            <div className='nbchoix'>
              <p>{pokemon.name} </p>
              <button className='button' onClick={() => setPokemonName(pokemon.name)}>choose</button>
            </div>
          </ul>
        ))}
    </nav>
  );
}

export default NavBar;