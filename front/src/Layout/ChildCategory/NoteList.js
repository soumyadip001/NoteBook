import React from "react"
import classes from "./Styles.module.css"

const noteList = (props) => {
    const ListGroupStyle = "list-group " + classes.ListGroupStyle
    const ListStyle = "list-group-item list-group-item-action " + classes.ListItemStyle
    const ListStyleActive = "list-group-item list-group-item-action " + classes.ListItemStyleActive
    return (
        <div className={ListGroupStyle}>
            <a href="/#" className={ListStyleActive}>
                01 - What is Node JS
            </a>
            <a href="/#" className={ListStyle}>
                02 - Why we use Node JS
            </a>
            <a href="/#" className={ListStyle}>
                03 - Event Driven Architecture
            </a>
            <a href="/#" className={ListStyle}>
                04 - Asynchronous Node
            </a>
            <a href="/#" className={ListStyle}>
                05 - Chrome's v8 Engine on C++
            </a>
        </div>
    )
}

export default noteList