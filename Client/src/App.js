import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  state  = {
    hello: null
  }
  // this is an API request to get the data from the express server
  componentDidMount () {
    axios.get('/hello')
    .then(res => this.setState({hello: res.data}))
    .catch(err => console.log(err))
  }

  return (
<div>
  {this.state.hello
    ? <div> {this.state.hello} <div>
    : null }
</div>
  );
}

export default App;
