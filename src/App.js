import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput.js';
import UserOutput from './User/UserOutput.js';

class App extends Component {

  userNameHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, This the first assignment of react app.</h1>
        <UserInput changed={this.userNameHandler}/>
        <UserOutput/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!!!!!'));
  }
}

export default App;
