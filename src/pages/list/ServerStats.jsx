import React from "react";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Row, Col, Badge} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers, faServer} from "@fortawesome/free-solid-svg-icons";

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

    if (serverListFetching) {
        return (
            <div id="server-stats" className="stats-container p-2 text-center">
                <div className="loading-message">{t('server-list.loading')}</div>
            </div>
        );
    }

    return (
        <div id="server-stats" className="card main-card">
            <div className="card-body">
                <Row>
                    <Col md={6} className="mb-3 mb-md-0">
                        <div className="stat-panel h-100">
                            <div className="stat-header d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faUsers} className="text-info me-3" size="lg" />
                                <h5 className="stat-title m-0">{t('server-stats.users-title')}</h5>
                            </div>
                            <div className="stat-content d-flex flex-column">
                                <div className="stat-item d-flex justify-content-between align-items-center mb-3">
                                    <span className="stat-label-text">{t('server-stats.total-online-users')}</span>
                                    <Badge bg="primary" className="stat-badge fs-6">
                                        {onlineUserCount.toLocaleString()}
                                    </Badge>
                                </div>
                                <div className="stat-item d-flex justify-content-between align-items-center">
                                    <span className="stat-label-text">{t('server-stats.filtered-users')}</span>
                                    <Badge bg="secondary" className="stat-badge fs-6">
                                        {displayUserCount.toLocaleString()}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="stat-panel h-100">
                            <div className="stat-header d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faServer} className="text-success me-3" size="lg" />
                                <h5 className="stat-title m-0">{t('server-stats.servers-title')}</h5>
                            </div>
                            <div className="stat-content">
                                <div className="server-count d-flex flex-wrap mb-3">
                                    <div className="me-4 mb-2">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 stat-label-text">{t('server-stats.online-label')}</span>
                                            <Badge bg="success" className="fs-6">
                                                {onlineServerCount.toLocaleString()}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 stat-label-text">{t('server-stats.offline-label')}</span>
                                            <Badge bg="warning" className="fs-6">
                                                {offlineServerCount.toLocaleString()}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="stat-item d-flex justify-content-between align-items-center">
                                    <span className="stat-label-text">{t('server-stats.filtered-servers')}</span>
                                    <Badge bg="info" className="stat-badge fs-6">
                                        {displayServerCount.toLocaleString()}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
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