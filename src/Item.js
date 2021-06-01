import React, { Component } from 'react'

class Item extends Component {
    render(){
        return (
            <li>{this.props.item}</li>
        )
    }
}

class Todo extends Component {
    render(){
        return (
            <div></div>
        )
    }
}

export { Item, Todo }