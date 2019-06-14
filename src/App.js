import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { getList } from './services/pokemonService';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    }
    this.fetchList = this.fetchList.bind(this);
  }
  componentDidMount() {
    this.fetchList();
  }

  fetchList(){
    getList().then(data => {
      this.setState({
        dataList: data.results,
      })
    })
  }

  render() {
    const {dataList} = this.state;
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' 
          render={routerProps => (<Home dataList = {dataList}/>)} />
          <Route path='/pokemon' component={Pokemon} />
        </Switch>
      </div>
    );
  }
}

export default App;
