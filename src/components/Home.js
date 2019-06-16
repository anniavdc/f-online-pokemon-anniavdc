import React from 'react';
import PokeList from './PokeList';
import './Home.css'
import poke from './../images/pokemon.jpg'

class Home extends React.Component{
    render(){
        const {getInputValue, inputValue, pokeData} = this.props;
        return(
            <div className='Home__container' style={{backgroundImage:`url(${poke})`}}>
                <h1 className='Home__title'>Pokedex</h1>
                <input 
                type="text" 
                onChange={getInputValue} 
                placeholder='Search by name'
                className='Home__input-search'/>
                <PokeList 
                pokeData={pokeData}
                inputValue={inputValue}/>
            </div>
        )
    }
}

export default Home;