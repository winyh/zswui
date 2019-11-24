import React, { Component } from 'react';
import { Button } from "./components"
import './App.scss';

class App extends Component {

  handle = () => {
  	console.log(222)
  }
  render(){
    return (
      <div className="main">
        Hi, Boy!
        <Button onClick={this.handle}>winyh</Button>
      </div>
    );
  }
}

export default App;