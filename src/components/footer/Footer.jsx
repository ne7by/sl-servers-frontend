import React from 'react';
import {useTranslation} from "react-i18next";

import "./footer.css";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <div className="jumbotron page-footer">
            Copyright 2020-2023. Horyu(류현오) All rights reserved.
            <br/><br/>
            <span dangerouslySetInnerHTML={{__html: t('footer.notice')}}/>
            <br/><br/>
            <a target="_blank" href="/credit" rel="noreferrer" style={{color: '#64B5F6'}}>Credit / Third Party Licenses</a>
            <br/><br/>
            I'm looking for applicants for site translation.
            <br/>
            If you are interested, please check
            &nbsp;<a target="_blank"
                     href="https://github.com/horyu1234/SCPLIST-KR-Translations"
                     rel="noreferrer"
                     style={{color: '#64B5F6'}}>
            https://github.com/horyu1234/SCPLIST-KR-Translations
        </a>
        </div>
    );
}

export default Footer;
