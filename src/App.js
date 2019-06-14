import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
    }
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/pokemon' component={ Pokemon } />
        </Switch>
      </div>
    );
  }
}

export default App;
