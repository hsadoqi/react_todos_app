import React, { Component } from 'react'
import List from './List'
import Form from './Form'

class App extends Component{
  render(){
    const name = "Bob"

    return (    
        <div className="App">
          <h1>Hello {name.toUpperCase()}</h1>
          <Form/>
          <List todos={["Exercise", "Sleep", "Code"]}/>
        </div>
    );
  }
}

export default App;
