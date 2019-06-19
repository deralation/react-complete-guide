import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    /*static getDerivedStateFromProps(props, state){
        console.log('[persons.js] getDeviredStateFromProps');
        return state;
    }*/

    shouldComponentUpdate(nextProps, nextState){
        console.log('[persons.js] shouldComponentUpdate');
        console.log(nextProps);
        console.log(nextState);
        if(nextProps.persons !== this.props.persons){
            return true;
        }else{
            return false;
        }
    }
    /*
        Invoked right after a component render happens because of an update. before componentDidUpdate. Any value returned from this method will be passed to componentDidUpdate.
    */
    getSnapshotBeforeUpdate(previousProps, previousState){
        console.log('[persons.js] getSnapshotBeforeUpdate');
        console.log(previousProps);
        console.log(previousState);
        return {message: "Snapshot"};
    }

    componentDidUpdate(previousProps, previousState, snapShot){
        console.log('[persons.js] componentDidUpdate');
        console.log(snapShot); debugger;
    }
    /*
     * It will be used to cancel any outgoing network requests, or remove all event listeners associted with the component.
    */
    componentWillUnmount(){
        console.log("[Persons.js] componenetWillUnmount");
    }

    render(){
        console.log('[Persons.js] rendering... '); 
        return  this.props.persons.map((person,index) => {
            return <Person 
                click={()=> this.props.clicked(index)} 
                name={person.name} 
                age={person.age}
                key={person.id} 
                changed = {(event) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;