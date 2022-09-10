import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ServerFilter from "./ServerFilter";
import ServerStats from "./ServerStats";
import ServerList from "./ServerList";
import * as serverListActions from '../../modules/serverList';

import "./list.css";

const List = (
    {
        ServerListActions
    }
) => {
    useEffect(() => {
        ServerListActions.getServerList();
    }, [ServerListActions]);

    return (
        <div className="container-fluid">
            <ServerFilter/>
            <ServerStats/>

            <span className="maxmind-credit">
                This product includes GeoLite2 data created by MaxMind, available from <a
                href="https://www.maxmind.com">https://www.maxmind.com</a>.
            </span>

            <ServerList/>
        </div>
    )
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        ServerListActions: bindActionCreators(serverListActions, dispatch)
    })
)(List);
