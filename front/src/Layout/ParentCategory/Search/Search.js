import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchBar = (props) => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" 
                placeholder="Search..." 
                aria-label="search bar" aria-describedby="search bar" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}

export default searchBar