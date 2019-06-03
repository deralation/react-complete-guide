import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id:'asfa1',name : "Gokhan", age : 32},
      {id:'asfa2',name : "Test", age : 40},
      {id:'asfa3',name : "Test 2", age : 42}
    ],
    otherState : 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === id });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  // Hide div
  togglerPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); 
  }

  render() {

    let persons = null;

    if (this.state.showPersons){
      persons = (
           <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
           />
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglerPersonsHandler}
          />
          {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!!!!!'));
  }
}

export default App;
