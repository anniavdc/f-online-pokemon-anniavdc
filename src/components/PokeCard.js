import React from 'react';
import './PokeCard.css'

class PokeCard extends React.Component {
    render() {
        const { name, imageSrc, types } = this.props;
        return (
            <div>
                <img className='PokeCard__image' src={imageSrc} alt={name} />
                <h2 className='PokeCard__title'>{name}</h2>
                <ul className='PokeCard__content-list'>
                    {types.map(type =>
                        <li className='PokeCard__content-item'>
                            {type.type.name}
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default PokeCard;