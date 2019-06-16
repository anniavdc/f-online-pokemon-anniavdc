import React from 'react';
import './PokeCard.css'

class PokeCard extends React.Component {
    render() {
        const { name, imageSrc, types, id } = this.props;
        return (
            <div>
                <img className='PokeCard__image' src={imageSrc} alt={name} />
                <p className='PokeCard__id'>{`ID/${id}`}</p>
                <h2 className='PokeCard__title'>{name}</h2>
                <ul className='PokeCard__content-list'>
                    {types.map((type, index) =>
                        <li className='PokeCard__content-item' key={index}>
                            {type.type.name}
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default PokeCard;