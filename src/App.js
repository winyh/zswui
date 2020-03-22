import React, { Component } from 'react';
import { Button, Card } from "./components"
import './App.scss';

class App extends Component {

  handle = () => {
  	console.log(222)
    alert(111)
  }

  render(){
    return (
      <div className="main">
        Hi, Boy!
        <Button type="primary" onClick={this.handle}>winyh</Button>
      </div>
    );
  }
}

export default App;