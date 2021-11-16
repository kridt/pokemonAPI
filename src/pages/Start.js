import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokeCard from '../components/PokeCard';
import "./Start.css"

export default function Start() {
    const [pokelist, setPokelist] = useState([])
    const [offset, setOffset] = useState(0);
    const [pokeInfo, setPokeInfo] = useState({})
    /* const [pokeType, setPokeType] = useState("type")
    const [pokeImg, setPokeImg] = useState("https://via.placeholder.com/100"); */

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
        .then(response => setPokelist(response.data))
        

        if(offset === 0) {
           const prevButton = document.getElementById("prev");

           prevButton.style.display="none"
        } else {
            const prevButton = document.getElementById("prev");

           prevButton.style.display="block"
        }

        
        
        
        
        
    }, [offset])
    
    
    
    return (
        <div>
            <div className="controlButtons">
                <Button variant="contained" id="prev" onClick={()=>setOffset(offset - 20)}>Previous</Button>
                <Button variant="contained" id="next" onClick={() => setOffset(offset + 20)}>Next</Button>
            </div>
            <div className="pokelist">
                {pokelist?.results?.map(pokemon =>{ 
                    const pokeResult = pokemon.url.split("/")
                    const pokeId = pokeResult[pokeResult.length - 2]
                    
                    
                    
                        /* axios.get(pokemon.url)
                        .then((response) => setPokeInfo(response.data)) */
  
                    
                    return (
                        <PokeCard key={pokemon.name} name={`${pokemon.name}`} pokemonId={pokeId} />

                    )
                })}
            </div>
        </div>
    )
}
