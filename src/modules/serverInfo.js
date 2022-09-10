import {handleActions} from "redux-actions";
import {getServerInfoAPI} from "../apiClient";

const SERVER_INFO_FETCHING = "SERVER_INFO_FETCHING";
const SERVER_INFO_SUCCESS = "SERVER_INFO_SUCCESS";
const SERVER_INFO_FAILURE = "SERVER_INFO_FAILURE";

export const getServerInfo = (serverId) => dispatch => {
    dispatch({type: SERVER_INFO_FETCHING});

    return getServerInfoAPI(serverId).then(
        (response) => {
            dispatch({
                type: SERVER_INFO_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        dispatch({
            type: SERVER_INFO_FAILURE,
            payload: error
        });
    })
}

const initialState = {
    fetching: false,
    error: false,
    data: {}
}

export default handleActions({
    [SERVER_INFO_FETCHING]: (state, action) => {
        return {
            ...state,
            fetching: true,
            error: false,
            data: {}
        };
    },
    [SERVER_INFO_SUCCESS]: (state, action) => {
        return {
            ...state,
            fetching: false,
            data: action.payload.data
        };
    },
    [SERVER_INFO_FAILURE]: (state, action) => {
        return {
            ...state,
            fetching: false,
            error: true,
            data: {}
        }
    }
}, initialState);
