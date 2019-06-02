import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';

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

    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click={()=> this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed = {(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push( classes.red ); // classes will be red
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push( classes.bold ); // classes will red and also be bold
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App.</h1>
          <p className={assignedClasses.join(' ')}>This is really working.</p>
          <button 
          className={btnClass}
          onClick={this.togglerPersonsHandler}>Toggle Person</button>
          {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!!!!!'));
  }
}

export default App;
