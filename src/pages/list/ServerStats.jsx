import React from "react";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";

const ServerStats = (
    {
        serverListFetching,

        displayServerCount,
        displayUserCount,
        offlineServerCount,
        onlineServerCount,
        onlineUserCount,
    }
) => {
    const {t} = useTranslation();

    return (
        <div id="server-stats" className="alert alert-secondary">
            {serverListFetching ? <>
                    {t('server-list.loading')}
                </>
                : <div className="row">
                    <div className="col-sm-6 col-md">
                        <div className="online-users">{t('server-stats.online-users', {count: onlineUserCount})}</div>
                        <div
                            className="display-users">{t('server-stats.display-users', {count: displayUserCount})}</div>
                    </div>
                    <div className="col-sm-6 col-md">
                    <span className="online-servers">
                        {t('server-stats.online-servers', {count: onlineServerCount})}
                    </span>
                        &nbsp;+&nbsp;
                        <span className="offline-servers">
                        {t('server-stats.offline-servers', {count: offlineServerCount})}
                    </span>
                        <div className="display-servers">
                            {t('server-stats.display-servers', {count: displayServerCount})}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default connect(
    (state) => ({
        serverListFetching: state.serverList.fetching,
        displayServerCount: state.serverList.data.displayServerCount,
        displayUserCount: state.serverList.data.displayUserCount,
        offlineServerCount: state.serverList.data.offlineServerCount,
        onlineServerCount: state.serverList.data.onlineServerCount,
        onlineUserCount: state.serverList.data.onlineUserCount
    })
)(ServerStats);