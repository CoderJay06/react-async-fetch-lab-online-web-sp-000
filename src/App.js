// create your App component here
// Create an App class component from scratch
// Write a componentDidMount method. Inside the method, 
// send a fetch request to http://api.open-notify.org/astros.json, 
// a free API that returns a list of people currently in space.
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    this.state = {
      astros: []
    };
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json'
      }
    }).then(response => console.log(response))
  }
  
  render() {
    
      <div>
        {this.state.astros}
      </div>
  }
}