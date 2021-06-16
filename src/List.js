import React, { Component } from 'react'
import Item from './Item'
import Form from './Form'

class List extends Component {
    constructor(){
        super()
        this.state = {
            todos: ["Run", "Cook", "Clean"]
        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log("component mounted")
        this.setState({ word: "Hello"})
    }

    renderItems() {
        return this.state.todos.map(item => <Item key={item} item={item} delete={this.deleteItem}/>)
    }

    componentDidUpdate(){
        console.log("old word", this.state.word)
        console.log("component updated")
        if(this.state.word === "Hello"){
            this.setState(() => ({ word: "Bye"}))
        }
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
            <>
                <Form handleSubmit={this.addItem}/>
                <ul>
                    {this.renderItems()}
                </ul>
            </>

        )
    }
}

export default List 

List.defaultProps = {
    todos: ["Sleep"]
}