import React, { Component } from 'react'
import List from './List'

class App extends Component{
  render(){
    const name = "Bob"

    return (    
        <div className="App">
          <h1>Hello {name.toUpperCase()}</h1>
          <List todos={["Exercise", "Sleep", "Code"]}/>
        </div>
    );
  }
}

export default App;
