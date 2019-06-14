import React from 'react';

class PokeCard extends React.Component{
    render(){
        const {name, url} = this.props;
        return(
            <p>Soy PokeCard</p>
        )
    }
}

export default PokeCard;