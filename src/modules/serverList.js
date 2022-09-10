import {handleActions} from "redux-actions";
import Axios from "axios";

const SERVER_LIST_FETCHING = "SERVER_LIST_FETCHING";
const SERVER_LIST_SUCCESS = "SERVER_LIST_SUCCESS";
const SERVER_LIST_FAILURE = "SERVER_LIST_FAILURE";

const getServerListAPI = (data) => {
    return Axios.post('http://home.horyu.me:30650/api/servers', data);
}

export const getServerList = () => (dispatch, getState) => {
    dispatch({type: SERVER_LIST_FETCHING});

    const state = getState();
    return getServerListAPI(state.serverFilter).then(
        (response) => {
            dispatch({
                type: SERVER_LIST_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        dispatch({
            type: SERVER_LIST_FAILURE,
            payload: error
        });
    })
}

const initialState = {
    fetching: false,
    error: false,
    data: {
        displayServerCount: 0,
        displayUserCount: 0,
        offlineServerCount: 0,
        onlineServerCount: 0,
        onlineUserCount: 0,
        servers: []
    }
}

export default handleActions({
    [SERVER_LIST_FETCHING]: (state, action) => {
        return {
            ...state,
            fetching: true,
            error: false,
            data: {
                ...state.data,
                servers: []
            }
        };
    },
    [SERVER_LIST_SUCCESS]: (state, action) => {
        return {
            ...state,
            fetching: false,
            data: action.payload.data
        };
    },
    [SERVER_LIST_FAILURE]: (state, action) => {
        return {
            ...state,
            fetching: false,
            error: true,
            data: {
                ...state.data,
                servers: []
            }
        }
    }
}, initialState);