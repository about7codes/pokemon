import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getPokeSingle } from '../redux/actions/pokeActions';

const Pokemon = (props) => {
    const pokeName = props.match.params.pokeName;
    const dispatch = useDispatch();
    const pokeState = useSelector((state) => state.pokeSingle)
    // console.log(pokeState);

    useEffect(() => {
        dispatch(getPokeSingle(pokeName));
    }, []);


    const showData = () => {
        if(pokeState.loading){
             return (
                <div className='loading'>
                    Loading... 
                    <i className="fas fa-life-ring fa-spin"></i>
                </div>
            );
        }

        if(!_.isEmpty(pokeState.data[pokeName])){
            const pokemon = pokeState.data[pokeName];
            console.log(pokemon)
            return (
                <div className="pokemon-wrapper">
                    <div className="item">
                        <h2>Sprites</h2>
                        <img src={pokemon.sprites.front_default} alt='spirits' />
                        <img src={pokemon.sprites.back_default} alt='spirits' />
                        <img src={pokemon.sprites.front_shiny} alt='spirits' />
                        <img src={pokemon.sprites.back_shiny} alt='spirits' />
                    </div>
                    <div className="item">
                        <h2>Stats</h2>
                        {pokemon.stats.map(item => (
                            <p key={item.stat.name}>{item.stat.name}: {item.base_stat}</p>
                        ))}
                    </div>
                    <div className="item">
                        <h2>Abilities</h2>
                        {pokemon.abilities.map(item => (
                            <p key={item.ability.name}>{item.ability.name}</p>
                        ))}
                    </div>
                </div>
            );
        }

        if(pokeState.errorMsg !== ''){
            return <p>{pokeState.errorMsg}</p>
        }

        return <p>No pokemon data found...</p>
    }
    return (
        <div className='poke'>
            <h1>{pokeState.pokeName}</h1>
            {showData()}
        </div>
    )
}

export default Pokemon;
