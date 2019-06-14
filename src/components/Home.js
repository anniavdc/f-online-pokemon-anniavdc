import React from 'react';
import PokeList from './PokeList';

class Home extends React.Component{
    render(){
        return(
            <PokeList 
            dataList={this.props.dataList}/>
        )
    }
}

export default Home;