import React from 'react';
import PokeCard from './PokeCard';
import './PokeList.css';

class PokeList extends React.Component {
    render() {
        const { pokeData, inputValue } = this.props;
        return (
            <ul className='PokeList__list'>
                {pokeData
                .filter(pokemon => pokemon.name.includes(inputValue))
                .map(pokemon =>
                    <li className='PokeList__item'>
                        <PokeCard 
                        name={pokemon.name}
                        imageSrc={pokemon.sprites.front_default}
                        types={pokemon.types}
                       />
                    </li>
                )}
            </ul>
        )
    }
}

export default PokeList;