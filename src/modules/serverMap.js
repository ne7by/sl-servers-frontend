import {handleActions} from "redux-actions";
import {getServerMapAPI} from "../apiClient";

const SERVER_MAP_FETCHING = "SERVER_MAP_FETCHING";
const SERVER_MAP_SUCCESS = "SERVER_MAP_SUCCESS";
const SERVER_MAP_FAILURE = "SERVER_MAP_FAILURE";

export const getServerMap = () => (dispatch) => {
    dispatch({type: SERVER_MAP_FETCHING});

    return getServerMapAPI().then(
        (response) => {
            dispatch({
                type: SERVER_MAP_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        dispatch({
            type: SERVER_MAP_FAILURE,
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
    [SERVER_MAP_FETCHING]: (state, action) => {
        return {
            ...state,
            fetching: true,
            error: false,
            data: []
        };
    },
    [SERVER_MAP_SUCCESS]: (state, action) => {
        return {
            ...state,
            fetching: false,
            data: action.payload.data
        };
    },
    [SERVER_MAP_FAILURE]: (state, action) => {
        return {
            ...state,
            fetching: false,
            error: true,
            data: []
        }
    }
}, initialState);
