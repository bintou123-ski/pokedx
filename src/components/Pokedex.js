import React from 'react';
import PokeCard from "./PokeCard";


const Pokedex =({pokemons})=>{
    const robots=pokemons.map((pokemon,i)=>{
        return <PokeCard
         key={i} 
         id={pokemons[i].id}
          name={pokemons[i].name}
           type={pokemons[i].type} 
           base_experience={pokemons[i].base_experience}
           />
    })
    return (
        <div>
            {robots}
        </div>
    )
}

export default Pokedex;
