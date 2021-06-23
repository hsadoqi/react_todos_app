import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

class Form extends Component {

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
        this.props.history.push('/list')
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    redirectOrRenderform = () => {
        if(this.props.loggedIn){
            return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            )
        } else {
            return <Redirect to="/list"/>
        }
    }

    render(){
        return (
            <>
                {this.redirectOrRenderform()}
            </>
        )
    }
}

export default withRouter(Form)