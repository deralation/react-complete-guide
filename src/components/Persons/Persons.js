import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    /*static getDerivedStateFromProps(props, state){
        console.log('[persons.js] getDeviredStateFromProps');
        return state;
    }*/

    shouldComponentUpdate(nextProps, nextState){
        console.log('[persons.js] shouldComponentUpdate');

        if(nextProps.persons !== this.props.persons){
            return true;
        }else{
            return false;
        }

        
    }

    getSnapshotBeforeUpdate(previousProps, previousState){
        console.log('[persons.js] getSnapshotBeforeUpdate');
        return {message: "Snapshot"};
    }

    componentDidUpdate(previousProps, previousState, snapShot){
        console.log('[persons.js] componentDidUpdate');
        console.log(snapShot);
    }

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