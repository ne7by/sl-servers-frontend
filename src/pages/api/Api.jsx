import React from 'react';
import SwaggerUI from "swagger-ui-react"

import "swagger-ui-react/swagger-ui.css"
import "../../css/api.css"

const Api = () => {
    return (
        <SwaggerUI url="https://backend.scplist.kr/api/docs"/>
    )
}

export default Api;
