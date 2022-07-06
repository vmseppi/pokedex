import React from 'react';
import PokemonData from './PokemonData';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function PorDefecto(props) {
    const [forDefault, setForDefault] = React.useState([]);
    const [anterior, setAnterior] = React.useState(null);
    const [siguiente, setSiguiente] = React.useState(null);
    const [actual , setActual] = useState('http://pokeapi.co/api/v2/pokemon?limit=10&offset=0`')


    useEffect(()=>{

        async function obtenerPokemones(){
            const response = await  fetch(actual)
            const data = await response.json();
            setForDefault(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);
        }
        obtenerPokemones()

      },[actual]);


    return(
        <div>
            <ul class="list-group">
                {forDefault.map((item, index)=>{
                    return <li class="list-group-item list-group-item-primary" key={index}>{item.name}</li>
                })}
            </ul>
           <button class="btn btn-primary" type="button" onClick={()=> siguiente !=null && setActual(siguiente)}>Siguientes</button>
           <button class="btn btn-primary" type="button" onClick={()=> anterior !=null && setActual(anterior)}>Anteriores</button>
        </div>
    )
}