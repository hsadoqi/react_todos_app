import React, { Component } from 'react'
import Item from './Item'

class List extends Component {
    constructor(){
        super()
        this.state = {
            todos: ["Run", "Cook", "Clean"], 
            list: ["Dance"]
        }

        this.deleteItem = this.deleteItem.bind(this)
    }

    renderItems() {
        return this.state.todos.map(item => <Item item={item} delete={this.deleteItem}/>)
    }

    handleClick = () => {
        this.setState({
            todos: [...this.state.todos, "Cry"]
        })
    }

    deleteItem(){
        console.log(this)
    }

    render(){
        // debugger
        return (
            <ul>
                <button onClick={this.handleClick}>Click me!</button>
                {this.renderItems()}
            </ul>
        )
    }
}

export default List 

List.defaultProps = {
    todos: ["Sleep"]
}