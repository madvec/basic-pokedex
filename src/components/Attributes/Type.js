import React from 'react'

const Type = (props) => {
    let types = Object.keys(props.types)
                .map((tyKey, index) => {
                    return <li key={index}>{props.types[tyKey].type.name}</li>
                });
    return(
        <ul>{types}</ul>
    )
}

export default Type