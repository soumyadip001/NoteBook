import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFile, faTimes } from '@fortawesome/free-solid-svg-icons'

const recentCategory = (props) => {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <span className="nav-link active note-header-title">Recently viewed</span>
            </li>
            <li className="nav-item">
                <a className="nav-link active note-header-link" href="/#">
                    <FontAwesomeIcon icon={faFile} />
                    <span>Node JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faFile} />
                    <span>React JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faFile} />
                    <span>Vue JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faFile} />
                    <span>JavaScript ES6</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
        </ul>
    )
}

export default recentCategory