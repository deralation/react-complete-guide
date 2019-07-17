import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Send HTTP request in here
        //setTimeout(()=> { 
        //    alert ('Saved data to cloud!')
        //}, 1000);
        toggleButtonRef.current.click();
        return () => {
            console.log("[Cockpit.js] cleanup work in useEffect.");
        };
    }, []);

    useEffect(()=>{
        console.log('[Cockpit.js] 2.useEffect'); 
        return () => {
            console.log("[Cockpit.js] cleanup work in 2.useEffect.");
        };
    })

    const assignedClasses = [];

    let btnClass = '';

    if (props.personsLength <= 2){
      assignedClasses.push( classes.red ); // classes will be red
    }

    if (props.personsLength <= 1){
      assignedClasses.push( classes.bold ); // classes will red and also be bold
    }

    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Person
            </button>
        </div>
    );
};

export default React.memo(cockpit);