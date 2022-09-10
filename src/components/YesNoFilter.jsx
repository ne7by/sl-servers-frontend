import React from 'react';
import {useTranslation} from "react-i18next";
import DropdownSelect from "./DropdownSelect";

const YesNoFilter = (
    {
        title,

        value,
        onChange
    }
) => {
    const {t} = useTranslation();

    const options = [
        {
            value: 'null',
            label: t('filter-option.yes-no-filter.none')
        },
        {
            value: 'true',
            label: t('filter-option.yes-no-filter.yes')
        },
        {
            value: 'false',
            label: t('filter-option.yes-no-filter.no')
        }
    ];

    return (
        <>
            <span className="yes-no-filter-name">{title}</span>

            <DropdownSelect
                options={options}

                value={options.find(option => option.value === value)}
                onChange={(option) => onChange(option.value)}
            />
        </>
    )
}

export default YesNoFilter;
