import React from 'react';
import {useTranslation} from "react-i18next";
import DropdownSelect from "./DropdownSelect";

const SortType = (
    {
        value,
        onChange
    }
) => {
    const {t} = useTranslation();

    const options = [
        {
            value: 'PLAYERS_DESC',
            label: t('filter-option.yes-no-filter.order-type.player-desc')
        },
        {
            value: 'PLAYERS_ASC',
            label: t('filter-option.yes-no-filter.order-type.player-asc')
        },
        {
            value: 'DISTANCE_ASC',
            label: t('filter-option.yes-no-filter.order-type.distance-asc')
        },
        {
            value: 'DISTANCE_DESC',
            label: t('filter-option.yes-no-filter.order-type.distance-desc')
        }
    ];

    return (
        <>
            <span className="yes-no-filter-name">
                {t('filter-option.yes-no-filter.order-type.name')}
            </span>

            <DropdownSelect
                options={options}

                value={options.find(option => option.value === value)}
                onChange={(option) => onChange(option.value)}
            />
        </>
    )
}

export default SortType;
