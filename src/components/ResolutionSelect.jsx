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
            label: t('server-info.graph.options.resolution.1m'),
        },
        {
            value: '5m',
            label: t('server-info.graph.options.resolution.5m'),
        },
        {
            value: '1h',
            label: t('server-info.graph.options.resolution.1h'),
        },
        {
            value: '1d',
            label: t('server-info.graph.options.resolution.1d'),
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
