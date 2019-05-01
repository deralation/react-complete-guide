import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name : "Gokhan", age : 32},
      {name : "Test", age : 40},
      {name : "Test 2", age : 42}
    ],
    otherState : 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //Dont do this this.state.persons[0].name = "Gokhan Muhittin";
    this.setState({ 
      persons: [
        {name : newName, age : 32},
        {name : "Test", age : 45},
        {name : "Test 2gokhan muhittin", age : 50}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age:'28'},
        {name: event.target.value, age:29},
        {name: 'Stephenie', age:26}
      ]
    })
  }

  // Hide div
  togglerPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
        </div>
      );
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
