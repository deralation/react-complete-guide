import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
  }

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
    console.log(this.state.userInput);
  }

  deleteCharHandlar = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  }

  renderInputChars = () => {
    const { userInput } = this.state;
    return userInput.split('').map((ch, index) => (
      <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandlar(index)}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>🍆 Yarrrak</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {this.renderInputChars()}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, I\'m a React App!!!!!!!'));
  }
}

export default App;
