import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, im a React App</h1>
        <p>This is really Working !</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29" >My Hobbies: run</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Does this work now '))
  }
}

export default App;
