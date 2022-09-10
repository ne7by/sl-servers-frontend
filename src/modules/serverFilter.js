import {createAction, handleActions} from "redux-actions";

const SERVER_FILTER_SEARCH_CHANGE = "SERVER_FILTER/SEARCH_CHANGE";
const SERVER_FILTER_COUNTRY_CHANGE = "SERVER_FILTER/COUNTRY_CHANGE";
const SERVER_FILTER_HIDE_EMPTY_CHANGE = "SERVER_FILTER/HIDE_EMPTY_CHANGE";
const SERVER_FILTER_HIDE_FULL_CHANGE = "SERVER_FILTER/HIDE_FULL_CHANGE";
const SERVER_FILTER_FRIENDLY_FIRE_CHANGE = "SERVER_FILTER/FRIEND_FIRE_CHANGE";
const SERVER_FILTER_WHITELIST_CHANGE = "SERVER_FILTER/WHITELIST_CHANGE";
const SERVER_FILTER_MODDED_CHANGE = "SERVER_FILTER/MODDED_CHANGE";
const SERVER_FILTER_SORT_TYPE_CHANGE = "SERVER_FILTER/SORT_TYPE_CHANGE";

// 액션 생성자
export const changeSearch = createAction(SERVER_FILTER_SEARCH_CHANGE);
export const changeCountry = createAction(SERVER_FILTER_COUNTRY_CHANGE);
export const changeHideEmpty = createAction(SERVER_FILTER_HIDE_EMPTY_CHANGE);
export const changeHideFull = createAction(SERVER_FILTER_HIDE_FULL_CHANGE);
export const changeFriendlyFire = createAction(SERVER_FILTER_FRIENDLY_FIRE_CHANGE);
export const changeWhitelist = createAction(SERVER_FILTER_WHITELIST_CHANGE);
export const changeModded = createAction(SERVER_FILTER_MODDED_CHANGE);
export const changeSortType = createAction(SERVER_FILTER_SORT_TYPE_CHANGE);

const initialState = {
    search: '',
    countryFilter: [],
    hideEmptyServer: false,
    hideFullServer: false,
    friendlyFire: 'null',
    whitelist: 'null',
    modded: 'null',
    sort: 'DISTANCE_ASC'
}

export default handleActions({
    [SERVER_FILTER_SEARCH_CHANGE]: (state, action) => {
        return {
            ...state,
            search: action.payload
        };
    },
    [SERVER_FILTER_COUNTRY_CHANGE]: (state, action) => {
        return {
            ...state,
            countryFilter: action.payload
        };
    },
    [SERVER_FILTER_HIDE_EMPTY_CHANGE]: (state, action) => {
        return {
            ...state,
            hideEmptyServer: action.payload
        };
    },
    [SERVER_FILTER_HIDE_FULL_CHANGE]: (state, action) => {
        return {
            ...state,
            hideFullServer: action.payload
        };
    },
    [SERVER_FILTER_FRIENDLY_FIRE_CHANGE]: (state, action) => {
        return {
            ...state,
            friendlyFire: action.payload
        };
    },
    [SERVER_FILTER_WHITELIST_CHANGE]: (state, action) => {
        return {
            ...state,
            whitelist: action.payload
        };
    },
    [SERVER_FILTER_MODDED_CHANGE]: (state, action) => {
        return {
            ...state,
            modded: action.payload
        };
    },
    [SERVER_FILTER_SORT_TYPE_CHANGE]: (state, action) => {
        return {
            ...state,
            sort: action.payload
        };
    }
}, initialState);