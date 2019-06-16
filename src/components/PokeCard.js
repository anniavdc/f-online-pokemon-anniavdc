import React from 'react';

class PokeCard extends React.Component {
    render() {
        const { name, image } = this.props;
        console.log(image);
        
        return (
            <div>
                <img className='PokeCard__image' src={image} alt={name}/>
                <h2 className='PokeCard__title'>{name}</h2>
            </div>
        )
    }
}

export default PokeCard;