import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from "./Container";
import {Credit, Info, List, Map, NotFound, Stats} from "../pages";
import {ToastContainer} from "react-toastify";
import {CookieConsent} from "react-cookie-consent";
import {useTranslation} from "react-i18next";

import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    const {t} = useTranslation();

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <Container view={<List/>}/>}/>
                    <Route path="/servers/:serverId" render={() => <Container view={<Info/>}/>}/>
                    <Route path="/stats" render={() => <Container view={<Stats/>}/>}/>
                    <Route path="/map" render={() => <Container view={<Map/>}/>}/>
                    <Route path="/credit" render={() => <Container view={<Credit/>}/>}/>
                    <Route path="/*" render={() => <Container view={<NotFound/>}/>}/>
                </Switch>
            </BrowserRouter>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <CookieConsent
                cookieName="user.cookie.consent"
                buttonText={t('cookie-notice.dismiss')}
            >
                {t('cookie-notice.message')} <a href="https://www.cookiesandyou.com/"
                                                target="_blank" rel="noreferrer">{t('cookie-notice.link-text')}</a>
            </CookieConsent>
        </>
    );
}

export default App;
