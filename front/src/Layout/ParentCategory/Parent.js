import React from "react"

import FabCategory from "./Favourites/FabCategory"
import Tags from "./Tags/Tags"
import Pinned from "./Favourites/Pinned"
import Recents from "./Favourites/Recents"
import Footer from "./Footer/HeaderFoot"

import SearchBar from "./Search/Search"
import AllCategories from "./All/AllCatParent"

import classes from "./Parent.module.css"

const parent = (props) => {

    const ListClassUL = "list-group " + classes.ParentCategoryList
    const ListClassLI = "list-group-item d-flex justify-content-between align-items-center " + classes.ParentCategoryListLI
    const TabLinkClass = "nav-link " + classes.ParentCategoryTabLink;
    const TabLinkClassActive = "nav-link active " + classes.ParentCategoryTabLink;

    const showTab = props.layout.showTab
    let showTabContent = ""
    let showTabLink = ""

    const allCategories = props.allCategories
    let allCategoriesHTML = ""
    if (allCategories.length > 0) {
        allCategoriesHTML = allCategories.map((cat, index) => {
            return <AllCategories key={cat.key} 
                id = {index}
                uniqueId = {cat.key}
                title = {cat.title}
                icon = {cat.icon}
                lastUpdated = {cat.lastUpdated}
                fileCount = {cat.fileCount}
                isMoreOptions = {cat.isMoreOptions}
                moreOptions = {cat.showMoreOptions}
                subCategories = {cat.subCategories}
                showChild = {cat.showChild}
                clickHandler = {props.events.showCategoryChild}
                selectCategory = {props.events.selectCategory}
                showMoreOptions = {props.events.showMoreOptions} />
        })
    }

    if (showTab === 'DASH') {
        showTabContent = (
            <div>
                <FabCategory />
                <Tags />
                <Pinned />
                <Recents />
            </div>
        )
        showTabLink = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="/#" className={TabLinkClassActive} onClick={ props.events.changeTab }>DASH</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className={TabLinkClass} onClick={ props.events.changeTab }>ALL</a>
                </li>
            </ul>
        )
    } else {
        showTabContent = (
            <div className="parent-search-wrapper">
                <SearchBar />
                { allCategoriesHTML }
            </div>
        )
        showTabLink = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a href="/#" className={TabLinkClass} onClick={ props.events.changeTab }>DASH</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className={TabLinkClassActive} onClick={ props.events.changeTab }>ALL</a>
                </li>
            </ul>
        )
    }

    return (
        <div className={classes.ParentCategory}>
            <p className={classes.MyNoteBookLogo}>Notebook</p>

            { showTabLink }
            { showTabContent }

            <Footer />

            <ul className={ListClassUL}>
                <li className={ListClassLI}>
                    <a href="/#" className={classes.ParentLink}>All Notes</a>
                    <span className="badge badge-pill">245</span>
                    
                </li>
                <li className={ListClassLI}>
                    <a href="/#" className={classes.ParentLink}>Note Books</a>
                    <span className="badge badge-pill">30</span>
                </li>
                <li className={ListClassLI}>
                    <a href="/#" className={classes.ParentLink}>Tutorial</a>
                    <span className="badge badge-pill">15</span>
                </li>
                <li className={ListClassLI}>
                    <a href="/#" className={classes.ParentLink}>Tags</a>
                    <span className="badge badge-pill">12</span>
                </li>
                <li className={ListClassLI}>
                    Advanced
                </li>
                <li className={ListClassLI}>
                    Intermediate
                </li>
                <li className={ListClassLI}>
                    Basic
                </li>
            </ul>
        </div>
    )
}

export default parent