import React, {useEffect} from 'react';
import SwaggerUI from "swagger-ui-react"

import "swagger-ui-react/swagger-ui.css"

const Api = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#fff';

        return () => {
            document.body.style.backgroundColor = '';
        }
    }, [])

    return (
        <SwaggerUI url="https://backend.scplist.kr/api/docs"/>
    )
}

export default Api;
