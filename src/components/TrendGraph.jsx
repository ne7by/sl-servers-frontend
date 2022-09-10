import React from 'react';
import {Plot} from '@influxdata/giraffe';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import I18nIsoCountries from "../i18n/i18n-iso-countries";

const TrendGraph = ({layers, fluxResponse}) => {
    const {t} = useTranslation();

    const userIsoCode = i18n.language.split('-')[0];

    const timeText = (unixTime) => {
        const time = new Date(unixTime);
        return time.toLocaleDateString() + ' ' + time.toLocaleTimeString();
    }

    const style = {
        height: "400px",
    };

    const config = {
        fluxResponse: fluxResponse,
        layers: layers,
        valueFormatters: {
            _time: time => timeText(time),
            _value: val => `${val}${t('server-info.graph.visitor-suffix') || ''}`,
            iso_code: isoCode => {
                if (isoCode === 'ALL') return '전체 국가'

                const isoCodeName = I18nIsoCountries().getName(isoCode, userIsoCode);
                return isoCodeName || isoCode;
            },
        },
        yAxisLabel: t('server-info.graph.visitors'),
        legendFont: "1em Pretendard",
        tickFont: "0.85em Pretendard",
    };

    return (
        <div style={style}>
            <Plot config={config}/>
        </div>
    );
}

export default TrendGraph;
