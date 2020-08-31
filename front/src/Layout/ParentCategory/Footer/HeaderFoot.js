import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faList, faLock, faUndo, faCog } from '@fortawesome/free-solid-svg-icons'

const headerFoot = (props) => {
    return (
        <div className="row header-footer bg-color-black">
            <div className="col">
                <FontAwesomeIcon icon={faList} />
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faUndo} />
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faCog} />
            </div>
            <div className="col">
                <FontAwesomeIcon icon={faLock} />
            </div>
        </div>
    )
}

export default headerFoot