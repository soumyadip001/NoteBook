import React from "react"
import classes from "./Styles.module.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSave, faPen, faTag, faPaperclip, faTrash, faStar, faMapPin, faDraftingCompass } from '@fortawesome/free-solid-svg-icons'

const topbarButtons = (props) => {
    const myToolbarCSS = "btn-toolbar " + classes.myToolbarWrapper
    return (
        <div className={myToolbarCSS} role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">
                    <FontAwesomeIcon icon={faPen} className={classes.whiteIcon} />
                </button>
                <button type="button" className="btn btn-secondary">
                    <FontAwesomeIcon icon={faTag} className={classes.whiteIcon} />
                </button>
                <button type="button" className="btn btn-secondary">
                    <FontAwesomeIcon icon={faPaperclip} className={classes.whiteIcon} />
                </button>
            </div>
            <div className="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary" style={{backgroundColor: '#ff9800', borderColor: '#fb8c00'}}>
                    <FontAwesomeIcon icon={faStar} className={classes.whiteIcon} />
                </button>
                <button type="button" className="btn btn-secondary">
                    <FontAwesomeIcon icon={faMapPin} className={classes.whiteIcon} />
                </button>
                <button type="button" className="btn btn-secondary">
                    <FontAwesomeIcon icon={faDraftingCompass} className={classes.whiteIcon} />
                </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary">
                    <FontAwesomeIcon icon={faSave} className={classes.whiteIcon} />
                </button>
                <button type="button" className="btn btn-danger">
                    <FontAwesomeIcon icon={faTrash} className={classes.whiteIcon} />
                </button>
            </div>
        </div>
    )
}

export default topbarButtons