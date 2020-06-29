import React from 'react'

const Abilities = (props) => {
    let abilities = Object.keys(props.abilities)
                .map((tyKey, index) => {
                    return <li key={index}>{props.abilities[tyKey].ability.name}</li>
                });
    return(
        <ul>{abilities}</ul>
    )
}

export default Abilities