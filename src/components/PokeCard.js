import React from 'react';

class PokeCard extends React.Component{
    render(){
        const {name, url} = this.props;
        return(
            <p>{name}</p>
        )
    }
}

export default PokeCard;