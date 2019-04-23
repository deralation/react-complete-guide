import React from 'react';

const userInput = (props) => {
    return(
        <div>
            <p>Username</p>
            <input type='text' onChange={props.changed} value={props.userName}></input>
        </div>
    )
}

export default userInput;