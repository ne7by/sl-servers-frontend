import React from "react";
import {connect} from "react-redux";

const ServerDistance = (
    {
        si,

        kmDistance
    }
) => {
    const value = si === 'km' ? kmDistance : kmDistance / 1.609;
    const displayValue = Math.floor(value * 100) / 100;

    return (
        <>{displayValue} {si}</>
    )
}

export default connect(
    (state) => ({
        si: state.setting.si
    })
)(ServerDistance);