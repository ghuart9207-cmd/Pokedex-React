interface InterfacePokemon {
  pokemon : {
    name : string;
    imgSrc?: string;
  }
}

function PokemonCard({pokemon}: InterfacePokemon) {

  return (
  <figure>
    {pokemon.imgSrc !== undefined ? (
      <img src={pokemon.imgSrc} alt={pokemon.name} />
    ) : (
      <p>???</p>
    )}
    <figcaption>{pokemon.name}</figcaption>
  </figure>
  )
}

export default PokemonCard;