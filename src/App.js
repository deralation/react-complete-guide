import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working.</p>
        <button 
        style={style}
        onClick={this.togglerPersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!!!!!'));
  }
}

export default App;
