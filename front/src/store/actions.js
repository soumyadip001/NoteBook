import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchFavourites = (favourites) => {
    return {
        type: actionTypes.FETCH_FAVOURITES,
        payload: favourites
    };
};

export const setError = () => {
    return {
        type: actionTypes.SET_ERROR
    };
};

export const initFavouritesData = () => {
    return dispatch => {
        const requestURL = '';

        axios.get(requestURL).then(response => {
            dispatch(fetchFavourites(response.data));
        }).catch(error => {
            dispatch(setError());
        });
    }
};