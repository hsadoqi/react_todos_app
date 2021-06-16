import React, { Component } from 'react'
import Button from './Button'

class Item extends Component {

    // componentDidMount(){
    //     this.timerId = setInterval(() => console.log(this.props.item, "interval"), 5000)
    // }

    // componentWillUnmount(){
    //     clearInterval(this.timerId)
    // }

    render(){

        return (
            <li>
                {this.props.item}
                <Button delete={this.props.delete} item={this.props.item}/>
            </li>
        )
    }
}


export default Item