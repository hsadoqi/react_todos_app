import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            item: ''
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({ item: ''})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        // is equivalent to:
        // this.setState({["item"]: e.target.value})
    }

    // handleOtherChange = (e) => {
    //     console.log(e)
    //     this.setState({ otherItem: e.target.value })
    // }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/><br/>
                <input type="submit"/>
            </form>
        )
    }
}