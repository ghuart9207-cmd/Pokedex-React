import './Pokecard.css'

interface InterfacePokemon {
  pokemon : {
    name : string;
    imgSrc?: string;
    color?:string;
  }
}

function PokemonCard({pokemon}: InterfacePokemon) {

  return (
  <figure className='card' style={{backgroundColor: pokemon.color}}>
    {pokemon.imgSrc !== undefined ? (
      <img className='image' src={pokemon.imgSrc} alt={pokemon.name} />
    ) : (
      <p className='noimage'>???</p>
    )}
    <figcaption className='nom' >{pokemon.name}</figcaption>
  </figure>
  )
}

export default PokemonCard;