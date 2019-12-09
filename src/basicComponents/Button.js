import React from 'react'
import './Button.css'

export default function Button(props){
    return(
        <button
            id='button'
            onClick={props.onClick}
        >
            {props.name}
        </button>
    )
}