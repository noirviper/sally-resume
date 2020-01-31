import React from "react"

function Work(props) {
    return(
        <div>
            <h3>{props.company}</h3>
            <h5>{props.role} | {props.date}</h5>
            <p>{props.details}</p>
        </div>
    )
}

export default Work