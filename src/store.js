import Cookies from 'js-cookie';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./modules";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {COOKIE_USER_SI} from "./modules/setting";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const setCookie = (key, value) => {
    if (Cookies.get(key) === value) return;
    Cookies.set(key, value);
}

store.subscribe(() => {
    const state = store.getState();

    setCookie(COOKIE_USER_SI, state.setting.si);
})

export default store;
