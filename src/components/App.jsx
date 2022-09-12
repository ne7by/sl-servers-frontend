import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from "./Container";
import {ToastContainer} from "react-toastify";
import {CookieConsent} from "react-cookie-consent";
import {useTranslation} from "react-i18next";

import 'react-toastify/dist/ReactToastify.min.css';

const Info = React.lazy(() => import('../pages/info/Info'));
const List = React.lazy(() => import('../pages/list/List'));
const Map = React.lazy(() => import('../pages/map/Map'));
const Stats = React.lazy(() => import('../pages/stats/Stats'));
const Credit = React.lazy(() => import('../pages/credit/Credit'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const App = () => {
    const {t} = useTranslation();

    return (
        <>
            <BrowserRouter>
                <React.Suspense fallback={<h1>Please wait...</h1>}>
                    <Switch>
                        <Route exact path="/" render={() => <Container view={<List/>}/>}/>
                        <Route path="/servers/:serverId" render={() => <Container view={<Info/>}/>}/>
                        <Route path="/stats" render={() => <Container view={<Stats/>}/>}/>
                        <Route path="/map" render={() => <Container view={<Map/>}/>}/>
                        <Route path="/credit" render={() => <Container view={<Credit/>}/>}/>
                        <Route path="/*" render={() => <Container view={<NotFound/>}/>}/>
                    </Switch>
                </React.Suspense>
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
