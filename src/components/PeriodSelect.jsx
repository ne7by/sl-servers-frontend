import React, {useMemo} from 'react';
import Select from 'react-select';
import {useTranslation} from "react-i18next";
import getStyles from "./SelectCustomStyles";

const PeriodSelect = ({value, onChange}) => {
    const {t} = useTranslation();
    const customSelectStyles = useMemo(() => getStyles(null, true), []);

    const periodOptions = [
        {
            value: 'custom',
            label: t('server-info.graph.options.period.custom'),
        },
        {
            value: '1hour',
            label: t('server-info.graph.options.period.1hour'),
        },
        {
            value: '8hour',
            label: t('server-info.graph.options.period.8hour'),
        },
        {
            value: '1day',
            label: t('server-info.graph.options.period.1day'),
        },
        {
            value: '2day',
            label: t('server-info.graph.options.period.2day'),
        },
        {
            value: '1week',
            label: t('server-info.graph.options.period.1week'),
        },
        {
            value: '1month',
            label: t('server-info.graph.options.period.1month'),
        },
        {
            value: '3month',
            label: t('server-info.graph.options.period.3month'),
        },
        {
            value: '1year',
            label: t('server-info.graph.options.period.1year'),
        },
        {
            value: '4year',
            label: t('server-info.graph.options.period.4year'),
        },
    ];

    return (
        <Select
            name="period"
            isSearchable={false}
            options={periodOptions}
            styles={customSelectStyles}
            value={periodOptions.find(option => option.value === value)}
            onChange={(option) => onChange(option.value)}
        />
    )
}

export default PeriodSelect;
