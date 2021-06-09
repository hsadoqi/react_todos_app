import React, { Component } from 'react'
import Item from './Item'
import Form from './Form'

class List extends Component {
    constructor(){
        super()
        this.state = {
            todos: ["Run", "Cook", "Clean"]
        }

    }

    renderItems() {
        return this.state.todos.map(item => <Item item={item} delete={this.deleteItem}/>)
    }

    // handleClick = () => {
    //     // this.setState({todos: [...this.state.todos, "Cry"]})
    //     // this.setState({todos: [...this.state.todos, "Eat"]})

    //     this.setState(function(prevState){
    //         return {
    //             todos: [...prevState.todos, "Cry"]
    //         }
    // })
    //     this.setState((prevState) => ({todos: [...prevState.todos, "Eat"]}))
    // }

    addItem = (formData) => {
        this.setState((prevState) => ({todos: [...prevState.todos, formData.item]}))
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