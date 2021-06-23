import React from 'react'
import Button from './Button'

const Item = (props) => {

    // componentDidMount(){
    //     this.timerId = setInterval(() => console.log(this.props.item, "interval"), 5000)
    // }

    // componentWillUnmount(){
    //     clearInterval(this.timerId)
    // }

    // debugger

    return (
            <li>
                {props.item.name}
                <Button delete={props.delete} item={props.item}/>
            </li>
        )
}


export default Item