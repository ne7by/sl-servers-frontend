import React from "react";
import getCountryName from "../../i18n/i18n-countries";
import ServerTech from "./ServerTech";
import ServerDistance from "../../components/ServerDistance";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpRightFromSquare, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Badge} from "react-bootstrap";

const ServerListItem = (
    {
        number,
        server,
    }
) => {
    const {t} = useTranslation();

    const handleClickServerInfo = (serverId) => {
        window.open(`/servers/${serverId}`, '_blank');
    }

    const commonTechList = [
        {
            name: t('server-list.tech.country'),
            version: getCountryName(server.isoCode)
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
            <td className="server-address">
                <code>{server.ip}:{server.port}</code>
            </td>
            <td className="server-info" onClick={() => handleClickServerInfo(server.serverId)}>
                <div className="server-name">
                    <span dangerouslySetInnerHTML={{__html: server.info}}/>
                </div>
                <ServerTech techList={techList}/>
            </td>
            <td className="server-pastebin">
                {server.pastebin && (
                    <a 
                        target="_blank" 
                        rel="noreferrer"
                        href={`https://pastebin.com/${server.pastebin}`}
                        className="btn btn-sm btn-outline-info d-flex align-items-center justify-content-center" 
                        style={{ gap: '6px' }}
                    >
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                        <span>{server.pastebin.substring(0, 6)}...</span>
                    </a>
                )}
            </td>
            <td className="server-players">
                <Badge 
                    bg={server.players > 0 ? "success" : "secondary"} 
                    className="player-badge d-flex align-items-center"
                    style={{ gap: '5px', padding: '6px 10px', fontSize: '1.1rem' }}
                >
                    <FontAwesomeIcon icon={faUsers} className="me-1" />
                    <span className="player-count">{server.players}</span>
                </Badge>
            </td>
            <td className="server-distance">
                <ServerDistance kmDistance={server.distance}/>
            </td>
        </tr>
    )
}

export default ServerListItem;
