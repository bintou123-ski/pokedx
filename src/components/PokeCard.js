import React from 'react';

const PokeCard =({name,type,id,base_experience})=>{
    return(
        <div className="gris">
            
            <div className="bleue">
            <h2>{name}</h2>
            </div>
           <div >
            <img alt=""  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            </div>
            <div>
           type:{type}
            </div>
            <div>
           Exp:{base_experience}
            </div>
           
        </div>
    )
}
export default PokeCard;