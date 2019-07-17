import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id:'asfa1',name : "Gokhan", age : 32},
      {id:'asfa2',name : "Test", age : 40},
      {id:'asfa3',name : "Test 2", age : 42}
    ],
    otherState : 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }
  
  // getDeviredStateFromProps Lifecycle: Executed before rendering on the initial mount and all component updates.
  // Used to update the state based on changes in props over time. Has rare use cases, like tracking the component animations during the lifecycle.
  // There are only few cases where this make sense to use over other lifecycle methods. It expects to return to object that will be the the new state, or null to update the new state.
  // This method does not have to access to the component instance either
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDeviredStateFromProps');
    console.log(props);
    console.log(state);
    return state;
  }

  /* componentWillMount() {
    console.log('App.js component will mount');
  }*/

  /* 
    Executed after the first rendering and here all AJAX Requests, DOM or state updates, and set up eventListeners should occurs.
  */
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  /* 
    Determines if the component will be updated or not. By default it returns true. If you are sure that the component does not need to render after state or props are updated.
    you can return false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.
  */
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    return true;
  }
  /* 
    Mostly it is used to update the DOM in response to prop or state changing
  */
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p => { return p.id === id });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState((prevState, props)=> {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter+1
      }
    });
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

  loginHandler = () => {
    this.setState({authenticated: true});
    console.log(this.state.authenticated);
  }

  render() {
    console.log('[App.js] render');
 
    let persons = null;

    if (this.state.showPersons){
      persons = (
           <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
           />
      );
    }

    return (
        <Aux>
          <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
          {this.state.showCockpit ? (<Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglerPersonsHandler}
            login={this.loginHandler}
          />):null}
          {persons}
        </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!!!!!'));
  }
}

export default withClass(App, classes.App);
