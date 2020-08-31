import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar, faUpload, faHeartBroken, faCloudUploadAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

const fabCategory = (props) => {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <span className="nav-link active note-header-title">Favourites</span>
            </li>
            <li className="nav-item">
                <a className="nav-link active note-header-link" href="/#">
                    <FontAwesomeIcon icon={faStar} />
                    <span>Node JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTrash} /></span>
                    <span className="note-header-action-icons color-blue"><FontAwesomeIcon icon={faUpload} /></span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faHeartBroken} /></span>
                    <span className="note-header-action-icons color-green"><FontAwesomeIcon icon={faCloudUploadAlt} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faStar} />
                    <span>React JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTrash} /></span>
                    <span className="note-header-action-icons color-blue"><FontAwesomeIcon icon={faUpload} /></span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faHeartBroken} /></span>
                    <span className="note-header-action-icons color-green"><FontAwesomeIcon icon={faCloudUploadAlt} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faStar} />
                    <span>Vue JS</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTrash} /></span>
                    <span className="note-header-action-icons color-blue"><FontAwesomeIcon icon={faUpload} /></span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faHeartBroken} /></span>
                    <span className="note-header-action-icons color-green"><FontAwesomeIcon icon={faCloudUploadAlt} /></span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link note-header-link" href="/#">
                    <FontAwesomeIcon icon={faStar} />
                    <span>JavaScript ES6</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTrash} /></span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faHeartBroken} /></span>
                    <span className="note-header-action-icons color-green"><FontAwesomeIcon icon={faCloudUploadAlt} /></span>
                </a>
            </li>
        </ul>
    )
}

export default fabCategory