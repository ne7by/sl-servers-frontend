import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from "./Container";
import {Info, List, Map, Stats} from "../pages";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <Container view={<List/>}/>}/>
                    <Route path="/servers/:serverId" render={() => <Container view={<Info/>}/>}/>
                    <Route path="/stats" render={() => <Container view={<Stats/>}/>}/>
                    <Route path="/map" render={() => <Container view={<Map/>}/>}/>
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
        </>
    );
}

export default App;
