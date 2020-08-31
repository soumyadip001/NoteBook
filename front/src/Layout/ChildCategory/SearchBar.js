import React from "react"
import classes from "./Styles.module.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchBar = (props) => {
    const WrapperStyle = "input-group " + classes.SearchWrapperStyle
    const SearchInputStyle = "form-control " + classes.SearchInputStyle
    const CreateNoteStyle = "btn btn-block " + classes.CreateNote
    return (
        <div>
        <div className={WrapperStyle}>
            <input type="text" className={SearchInputStyle}
                placeholder="Enter Title" 
                aria-label="Search Notes" 
                aria-describedby="basic-addon2" />

            <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                    <FontAwesomeIcon icon={faSearch} className={classes.whiteIcon} />
                </button>
            </div>
        </div>

        <button className={CreateNoteStyle} onClick={props.click}>
            Create Note
        </button>
        </div>
    )
}

export default searchBar