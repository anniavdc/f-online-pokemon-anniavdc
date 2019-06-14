import React from 'react';
import PokeCard from './PokeCard';

class PokeList extends React.Component {
    render() {
        const { dataList } = this.props;
        return (
            <ul>
                {dataList.map(pokemon =>
                    <li>
                        <PokeCard 
                        name={pokemon.name}
                        image={pokemon.url}/>
                    </li>
                )}
            </ul>
        )
    }
}

export default PokeList;