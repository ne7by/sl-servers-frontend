import React from "react";
import I18nIsoCountries from "../../i18n/i18n-iso-countries";
import ServerTech from "./ServerTech";
import ServerDistance from "../../components/ServerDistance";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

const ServerListItem = (
    {
        number,
        server,
    }
) => {
    const {t} = useTranslation();

    const userIsoCode = i18n.language.split('-')[0];

    const handleClickServerInfo = (serverId) => {
        window.open(`/servers/${serverId}`, '_blank');
    }

    const commonTechList = [
        {
            name: t('server-list.tech.country'),
            version: I18nIsoCountries().getName(server.isoCode, userIsoCode)
        },
        {
            name: t('server-list.tech.game-version'),
            version: server.version
        },
        {
            name: t('server-list.tech.friendly-fire'),
            version: server.friendlyFire ? t('server-list.tech.yes') : t('server-list.tech.no')
        },
        {
            name: t('server-list.tech.whitelist'),
            version: server.whitelist ? t('server-list.tech.yes') : t('server-list.tech.no')
        }
    ]

    const techList = [
        ...commonTechList,
        ...server.techList
    ];

    return (
        <tr>
            <td className="server-no">{number}</td>
            <td className="server-address">{server.ip}:{server.port}</td>
            <td className="server-info" onClick={() => handleClickServerInfo(server.serverId)}>
                <span dangerouslySetInnerHTML={{__html: server.info}}/>
                <ServerTech techList={techList}/>
            </td>
            <td className="server-pastebin">
                <a target="_blank" rel="noreferrer"
                   href={`https://pastebin.com/${server.pastebin}`}>{server.pastebin}</a>
            </td>
            <td className="server-players">{server.players}</td>
            <td className="server-distance"><ServerDistance kmDistance={server.distance}/></td>
        </tr>
    )
}

export default ServerListItem;