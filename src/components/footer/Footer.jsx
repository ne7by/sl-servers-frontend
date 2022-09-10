import React from 'react';
import {useTranslation} from "react-i18next";

import "./footer.css";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <div className="jumbotron page-footer">
            Copyright 2020-2021. horyu1234(류현오) All rights reserved.
            <br/><br/>
            {t('footer.notice')}
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
