import React from "react";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import ServerListItem from "./ServerListItem";

const ServerList = (
    {
        serverListFetching,

        servers
    }
) => {
    const {t} = useTranslation();

    return (
        <div id="server-list-table-container">
            <table className="table" id="server-list-table">
                <thead>
                <tr>
                    <th className="text-center">{t('server-list.head.number')}</th>
                    <th className="text-center">{t('server-list.head.address')}</th>
                    <th className="text-center">{t('server-list.head.name')}</th>
                    <th className="text-center">{t('server-list.head.pastebin')}</th>
                    <th className="text-center">{t('server-list.head.players')}</th>
                    <th className="text-center">{t('server-list.head.distance')}</th>
                </tr>
                </thead>
                <tbody>
                {serverListFetching && <tr>
                    <td colSpan={6}>{t('server-list.loading')}</td>
                </tr>}
                {!serverListFetching && servers.length === 0 && <tr>
                    <td colSpan={6}>{t('server-list.empty')}</td>
                </tr>}
                {servers.map((server, index) =>
                    <ServerListItem
                        key={index}

                        number={index + 1}
                        server={server}
                    />
                )}
                </tbody>
            </table>
        </div>
    )
}

export default connect(
    (state) => ({
        serverListFetching: state.serverList.fetching,
        servers: state.serverList.data.servers || []
    })
)(ServerList);