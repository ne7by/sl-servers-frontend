import React, {useMemo} from 'react';
import Select from 'react-select';
import {useTranslation} from "react-i18next";
import getStyles from "./SelectCustomStyles";

const ResolutionSelect = ({value, onChange, availableValues}) => {
    const {t} = useTranslation();
    const customSelectStyles = useMemo(() => getStyles(null, true), []);

    const resolutionOptions = [
        {
            value: '1m',
            label: '1분',
        },
        {
            value: '5m',
            label: '5분'
        },
        {
            value: '1h',
            label: '1시간'
        },
        {
            value: '1d',
            label: '1일'
        },
    ];

    return (
        <Select
            name="resolution"
            isSearchable={false}
            options={resolutionOptions}
            styles={customSelectStyles}
            isOptionDisabled={(option) => !availableValues.includes(option.value)}
            value={resolutionOptions.find(option => option.value === value)}
            onChange={(option) => onChange(option.value)}
        />
    )
}

export default ResolutionSelect;