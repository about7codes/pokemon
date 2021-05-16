import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import PokeList from './components/PokeList';
import Pokemon from './components/Pokemon';

const App = () => {
    return (
        <div className="App">
            <nav>
                <h1>Pokemon</h1>
                <NavLink to='/'>Home</NavLink>
            </nav>
            <Switch>
                <Route path='/' exact component={PokeList} />
                <Route path='/pokemon/:pokeName' exact component={Pokemon} />
                <Redirect to='/' />
            </Switch>
        </div>
    )
}

export default App;
