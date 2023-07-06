import React from 'react';
import {Form, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartPie, faList, faMap, faGears} from "@fortawesome/free-solid-svg-icons";
import LanguageSelect from "./LanguageSelect";
import SiSelect from "./SiSelect";

const TopMenu = () => {
    const {t} = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">{t('navbar.title')}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" exact to="/">
                        <FontAwesomeIcon icon={faList}/> {t('navbar.server-list')}
                    </NavLink>
                    <NavLink className="nav-link" to="/stats">
                        <FontAwesomeIcon icon={faChartPie}/> {t('navbar.all-stats')}
                    </NavLink>
                    <NavLink className="nav-link" to="/map">
                        <FontAwesomeIcon icon={faMap}/> {t('navbar.all-server-map')}
                    </NavLink>
                    <NavLink className="nav-link" to="/api">
                        <FontAwesomeIcon icon={faGears}/> API
                    </NavLink>
                </Nav>
                <Form inline>
                    <div style={{marginRight: '10px'}}>
                        <LanguageSelect/>
                    </div>

                    <div>
                        <SiSelect/>
                    </div>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopMenu;
