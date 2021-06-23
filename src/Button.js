import React from 'react'

function Button (props){
        return (
            <button onClick={() => props.delete(props.item)}>X</button>
        )
}

export default Button