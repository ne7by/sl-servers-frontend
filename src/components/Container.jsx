import React from 'react';
import TopMenu from "./topmenu/TopMenu";
import Footer from "./footer/Footer";

const Container = ({view}) => {
    return (
        <>
            <TopMenu/>
            {view}
            <Footer/>
        </>
    );
}

export default Container;
