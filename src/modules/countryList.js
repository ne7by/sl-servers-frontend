import {handleActions} from "redux-actions";
import Axios from "axios";

const COUNTRY_LIST_FETCHING = "COUNTRY_LIST_FETCHING";
const COUNTRY_LIST_SUCCESS = "COUNTRY_LIST_SUCCESS";
const COUNTRY_LIST_FAILURE = "COUNTRY_LIST_FAILURE";

const getCountryListAPI = () => {
    return Axios.get('http://home.horyu.me:30650/api/stats/country');
}

export const getCountryList = () => (dispatch) => {
    dispatch({type: COUNTRY_LIST_FETCHING});

    return getCountryListAPI().then(
        (response) => {
            dispatch({
                type: COUNTRY_LIST_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        dispatch({
            type: COUNTRY_LIST_FAILURE,
            payload: error
        });
    })
}

const initialState = {
    fetching: false,
    error: false,
    data: []
}

export default handleActions({
    [COUNTRY_LIST_FETCHING]: (state, action) => {
        return {
            ...state,
            fetching: true,
            error: false,
            data: []
        };
    },
    [COUNTRY_LIST_SUCCESS]: (state, action) => {
        return {
            ...state,
            fetching: false,
            data: action.payload.data
        };
    },
    [COUNTRY_LIST_FAILURE]: (state, action) => {
        return {
            ...state,
            fetching: false,
            error: true,
            data: []
        }
    }
}, initialState);