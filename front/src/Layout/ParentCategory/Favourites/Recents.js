import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFile, faTimes } from '@fortawesome/free-solid-svg-icons';

const RecentCategory = (props) => {
    let recentItems = null;
    if (props.recentlyViewed) {
        recentItems = props.recentlyViewed.map(item => {
            return <li className="nav-item" key={item.id}>
                <a className="nav-link active note-header-link" href="/#">
                    <FontAwesomeIcon icon={faFile} />
                    <span>{item.title}</span>
                    <span className="note-header-action-icons color-red"><FontAwesomeIcon icon={faTimes} /></span>
                </a>
            </li>;
        });
    }
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <span className="nav-link active note-header-title">Recently viewed</span>
            </li>
            { recentItems }
        </ul>
    );
};

RecentCategory.propTypes = {
    recentlyViewed: PropTypes.any.isRequired,
};

const mapStateToProps = state => ({
    recentlyViewed: state.recentlyViewed,
});

export default connect(mapStateToProps, null)(RecentCategory);