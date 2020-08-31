import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons'

const pinnedCategory = (props) => {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <span className="nav-link active note-header-title">Pinned Items</span>
            </li>
            <li className="nav-item">
                <a className="nav-link active note-header-link" href="/#">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <span>Node JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <span>MongoDB</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <span>Vue JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <span>Redis Store</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>
        </ul>
    )
}

export default pinnedCategory