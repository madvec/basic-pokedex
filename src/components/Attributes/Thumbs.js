import React from 'react'

const Thumbs = (props) => {
    return (
        <div>
            <span>
                <img
                    src={props.thumbs.front_default}
                    alt={props.name}>
                </img>
            </span>
            <span>
                <img
                    src={props.thumbs.back_default}
                    alt={props.name}>
                </img>
            </span>
        </div>
    )
}

export default Thumbs