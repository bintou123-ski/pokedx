import React  from 'react';
import Pokedex from "./Pokedex";
import pokemons from "./pokemons";
import './pokemons.css'

const App =()=>{
    return(
        <div className="one">
            <h1 className="title">Pokedex</h1>
            <Pokedex pokemons={pokemons}/>
        </div>
    )
}
export default App;
