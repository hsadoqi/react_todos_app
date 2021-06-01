import React, { Component } from 'react'
import { Item } from './Item'

class List extends Component {

    renderItems() {
        return this.props.todos.map(item => <Item item={item}/>)
    }

    render(){
        return (
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

export default List 