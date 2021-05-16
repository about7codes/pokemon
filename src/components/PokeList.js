import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

import { getPokeList } from '../redux/actions/pokeActions';
import pokeball from '../images/pokeball.png';

const PokeList = (props) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const pokeData = useSelector(state => state.pokeList);
    // console.log(pokeData);

    useEffect(() => {
        fetchData(1);
    }, []);
    
    const fetchData = (page=1) => {
        dispatch(getPokeList(page));
    }

    const showData = () => {
        if(pokeData.loading){
            return (
                <div className='loading'>
                    Loading... 
                    <i className="fas fa-life-ring fa-spin"></i>
                </div>
            );
        }

        if(!_.isEmpty(pokeData.data)){
            return (
                <div className="list-wrapper">
                    {pokeData.data.map(poke => (
                        <div className="pokemon-item" key={poke.name}>
                            <p>
                            <img src={pokeball} alt='ball' />
                            {poke.name}
                            </p>
                            <Link to={`/pokemon/${poke.name}`}>View</Link>
                        </div>
                    ))}
                </div>
            );
        }

        if(pokeData.errorMsg){
            return <p>{pokeData.errorMsg}</p>
        }

        return <p>No pokemon Data found...</p>
    }
    return (
        <div>
            <div className="search-wrapper">
                <div className="search">
                    <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Find pokemon...' />
                    <button onClick={() => props.history.push(`/pokemon/${search}`)}><i className="fas fa-search"></i></button>
                </div>
            </div>
            <div className="content">
                {showData()}
            </div>
            {!_.isEmpty(pokeData.data) && <ReactPaginate 
                pageCount={Math.ceil(pokeData.count / 20)}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                containerClassName='pagination'
                onPageChange={(num) => fetchData(num.selected + 1)}
            />}
        </div>
    )
}

export default PokeList;
