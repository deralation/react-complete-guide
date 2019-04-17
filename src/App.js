import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
  const [ personState, setPersonsState ] = useState({
    persons: [
      {name : "Gokhan", age : 32},
      {name : "Test", age : 40},
      {name : "Test 2", age : 42}
    ],
    otherState : 'some other values'
  });

  const switchNameHandler = () => {
    //console.log('Was clicked');
    //Dont do this this.state.persons[0].name = "Gokhan Muhittin";
    setPersonsState({
      persons: [
        {name : "Gokhan", age : 32},
        {name : "Test", age : 45},
        {name : "Test 2", age : 50}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>This is really working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbie: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!!!!!'));
}

export default app;