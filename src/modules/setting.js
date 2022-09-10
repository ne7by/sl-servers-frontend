import Cookies from 'js-cookie';
import {handleActions} from "redux-actions";

const SETTING_SI_CHANGE = "SETTING/SI_CHANGE";

export const COOKIE_USER_SI = 'user.si';

export const changeSi = (data) => dispatch => {
    dispatch({
        type: SETTING_SI_CHANGE,
        payload: data
    })
}

const initialState = {
    si: Cookies.get(COOKIE_USER_SI) || 'km'
}

export default handleActions({
    [SETTING_SI_CHANGE]: (state, action) => {
        return {
            ...state,
            si: action.payload
        };
    }
}, initialState);