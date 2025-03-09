import React from 'react';
import {useTranslation} from "react-i18next";
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

const Footer = () => {
    const {t} = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="footer-heading">{t('navbar.title')}</h5>
                        <p className="footer-description">
                            SCP: SL server list with filtering options, trends and statistics.
                        </p>
                        <p className="copyright">
                            Copyright &copy; 2020-{currentYear}. Horyu(류현오) All rights reserved.
                        </p>
                    </Col>
                    
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="footer-heading">Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li>
                                <a href="/" className="footer-link">Home</a>
                            </li>
                            <li>
                                <a href="/stats" className="footer-link">Statistics</a>
                            </li>
                            <li>
                                <a href="/map" className="footer-link">Server Map</a>
                            </li>
                            <li>
                                <a href="/api" className="footer-link">API</a>
                            </li>
                            <li>
                                <a target="_blank" href="/credit" rel="noreferrer" className="footer-link">
                                    Credit / Third Party Licenses
                                </a>
                            </li>
                        </ul>
                    </Col>
                    
                    <Col md={4}>
                        <h5 className="footer-heading">Translation</h5>
                        <p>
                            I'm looking for applicants for site translation.
                        </p>
                        <a 
                            target="_blank"
                            href="https://github.com/horyu1234/SCPLIST-KR-Translations"
                            rel="noreferrer"
                            className="btn btn-outline-primary btn-sm d-inline-flex align-items-center"
                            style={{ gap: '8px' }}
                        >
                            <FontAwesomeIcon icon={faCode} />
                            <span>Contribute on GitHub</span>
                        </a>
                        <div className="mt-4">
                            <span dangerouslySetInnerHTML={{__html: t('footer.notice')}} className="notice-text"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
