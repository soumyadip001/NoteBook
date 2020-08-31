import React from "react"
import { MoreVert, FolderSpecial, Folder, NoteAdd, Sync, CreateNewFolder, Edit, Delete } from '@material-ui/icons';

const allCategoriesParent = (props) => {
    let showMoreOptionsHTML = null
    if (props.moreOptions) {
        showMoreOptionsHTML = (
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="moreoptionMenuButton">
                <a className="dropdown-item" href="/#">
                    <CreateNewFolder /> &nbsp;Create Folder</a>
                <a className="dropdown-item" href="/#">
                    <NoteAdd /> &nbsp;Add file</a>
                <a className="dropdown-item" href="/#">
                    <Sync /> &nbsp;Sync</a>
                <a className="dropdown-item" href="/#">
                    <Edit /> &nbsp;Rename</a>
                <a className="dropdown-item" href="/#">
                    <Delete /> &nbsp;Delete</a>
            </div>
        )
    }
    const moreOptionsButton = (props.isMoreOptions) ? (
        <div className="dropdown">
            <button className="btn dropdown-toggle" id="moreoptionMenuButton" 
                aria-haspopup="true" aria-expanded="false">
                <MoreVert />
            </button>
            { showMoreOptionsHTML }
        </div>
    ) : null

    let categoryClass = "row header-all-category-parent"
    let subcategoriesHTML = null
    if (props.subCategories.length > 0 && props.showChild) {
        categoryClass = categoryClass + " active"
        subcategoriesHTML = props.subCategories.map((cat, index) => {
            return (  
                <div className="row header-all-category-child" key={index}>
                    <div className="col-1"></div>
                    <div className="col-1">
                        <Folder />
                    </div>
                    <div className="col-8">
                        <div className="header-all-category-child-title" 
                            onClick={() => props.selectCategory(cat.key, props.uniqueId, props.id, index)}>
                            { cat.title } <span>{ cat.count }</span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="header-all-category-wrapper">
            <div className={categoryClass}>
                <div className="col-2">
                    <FolderSpecial />
                </div>
                <div className="col-8">
                    <div className="header-all-category-parent-title" onClick={() => props.clickHandler(props.id)}>
                        {props.title}</div>
                    <div className="header-all-category-parent-content">
                        {props.lastUpdated}
                        <span>{props.fileCount} file(s)</span>
                    </div>
                </div>
                <div className="col-2 cursor-pointer show-more-options" onClick={() => props.showMoreOptions(props.id)}>
                    { moreOptionsButton }
                </div>
            </div>
            { showMoreOptionsHTML }
            { subcategoriesHTML }
        </div>
    )
}

export default allCategoriesParent