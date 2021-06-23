import React from 'react'
import List from './List'
import Form from './Form'
import { Route, Switch } from 'react-router-dom'
import Item from './Item'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        todos: [
          {
          id: 1,
          name: "Run"
        }, 
          {
            id: 2,
            name: "Cook"
          }, 
          {
            id: 3,
            name: "Clean"
          }],
        loggedIn: true
    }

  }

  componentDidMount(){
    this.setState({ word: "Hello"})
  }

  addItem = (formData) => {
    this.setState((prevState) => ({todos: [...prevState.todos, formData.item]}))
  }

  deleteItem = (item) => {
    const newTodos = this.state.todos.filter(todo => todo !== item)
    this.setState({todos: newTodos})
  }

  render(){
      return (    
          <div className="App">
            <Switch>
              <Route exact path="/list/new">
                    <Form handleSubmit={this.addItem} loggedIn={this.state.loggedIn}/>
                </Route>
              <Route exact path="/list/:id" render={(routerProps) => <Item item={this.state.todos.find(todo => todo.id === parseInt(routerProps.match.params.id))}/>}/>
              <Route path="/list">
                <List delete={this.deleteItem} todos={this.state.todos}/>
              </Route>
            </Switch>
          </div>
      );
  }

}

export default App;
