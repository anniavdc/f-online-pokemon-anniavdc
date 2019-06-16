import React from 'react';
import PokeCard from './PokeCard';

class PokeList extends React.Component {
    constructor(props){
        super(props);
        this.getImageSrc=this.getImageSrc.bind(this);
    }
    getImageSrc(url){
        const regex = /\/(\d+)\//g;
        const string = url;
        const matches = regex.exec(string);
        console.log(matches);
        const id = matches[1];
        const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        
        return src;
    }
    render() {
        const { dataList } = this.props;
        return (
            <ul>
                {dataList.map(pokemon =>
                    <li>
                        <PokeCard 
                        name={pokemon.name}
                        image={this.getImageSrc(pokemon.url)}/>
                    </li>
                )}
            </ul>
        )
    }
}

export default PokeList;