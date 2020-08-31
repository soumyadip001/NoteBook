import React from "react"
import classes from "./Tags.module.css"

const tags = (props) => {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <span className="nav-link active note-header-title">Used Tags</span>
            </li>
            <li className="nav-item">
                <a className="nav-link active note-header-link" href="/#">
                    <span className={classes.HashIcon}>#</span>
                    <span>JavaScript</span>
                    <span className={classes.HashCount}>34</span>
                </a>
                <a className="nav-link active note-header-link" href="/#">
                    <span className={classes.HashIcon}>#</span>
                    <span>Interview</span>
                    <span className={classes.HashCount}>110</span>
                </a>
                <a className="nav-link active note-header-link" href="/#">
                    <span className={classes.HashIcon}>#</span>
                    <span>Advance Topic</span>
                    <span className={classes.HashCount}>54</span>
                </a>
                <a className="nav-link active note-header-link" href="/#">
                    <span className={classes.HashIcon}>#</span>
                    <span>NPM Package</span>
                    <span className={classes.HashCount}>40</span>
                </a>
            </li>
        </ul>
    )
}

export default tags