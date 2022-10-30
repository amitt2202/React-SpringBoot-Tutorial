import React, { Component } from 'react';
import TodoApp from './Components/todo/TodoApp';
import './App.css';
import './bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        
       {/*<Counter></Counter>*/}
       <TodoApp></TodoApp>
            
      </div>
    );
  }
}



export default App;

