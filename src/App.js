import React from 'react';
import './App.css';
import { getList, getDetail } from './services/pokemonService';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeData: [],
      inputValue: '',
    }
    this.fetchList = this.fetchList.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }
  componentDidMount() {
    this.fetchList();
  }

  fetchList() {
    getList()
    .then(data => {
      data.results.forEach(pokemon => {
        getDetail(pokemon.url)
        .then(pokemonData => {
          this.setState({
            pokeData: [...this.state.pokeData, pokemonData],
          })
        }
        )
      })
    })
  }

  getInputValue(event) {
    const value = event.target.value
    this.setState({
      inputValue: value,
    })
  }
  render() {
    const { inputValue, pokeData } = this.state;
    return (
      <div className='App'>
        <Home
              pokeData={pokeData}
              inputValue={inputValue}
              getInputValue={this.getInputValue}
            />
      </div>
    );
  }
}

export default App;
