import React from 'react';
import PokeList from './PokeList';

class Home extends React.Component{
    render(){
        const {getInputValue, dataList, inputValue, pokeData} = this.props;
        return(
            <React.Fragment>
                <h1>Pokemon</h1>
                <input type="text" onChange={getInputValue}/>
                <PokeList 
                dataList={dataList}
                pokeData={pokeData}
                inputValue={inputValue}/>
            </React.Fragment>
        )
    }
}

export default Home;