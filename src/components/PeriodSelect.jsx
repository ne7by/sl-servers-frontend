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
            label: '직접지정'
        },
        {
            value: '1hour',
            label: '1시간'
        },
        {
            value: '8hour',
            label: '8시간'
        },
        {
            value: '1day',
            label: '1일'
        },
        {
            value: '2day',
            label: '2일'
        },
        {
            value: '1week',
            label: '1주'
        },
        {
            value: '1month',
            label: '1달'
        },
        {
            value: '3month',
            label: '3달'
        },
        {
            value: '1year',
            label: '1년'
        },
        {
            value: '4year',
            label: '4년'
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