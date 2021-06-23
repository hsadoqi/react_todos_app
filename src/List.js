import React, { Component } from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

class List extends Component {

    renderItems() {
        return this.props.todos.map(item => <Item key={item} item={item} delete={this.props.delete}/>)
    }

    render(){
        return (
            <>
                <ul>
                    {this.renderItems()}
                    <Link to="/list/new"> New To Do</Link>
                </ul>
            </>

        )
    }
}

export default List 

List.defaultProps = {
    todos: ["Sleep"]
}