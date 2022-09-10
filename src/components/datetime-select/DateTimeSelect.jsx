import React from 'react';
import {useTranslation} from "react-i18next";
import DatePicker from "react-datepicker";
import {GRAPH_DATA_START_TIME} from "../../dateFactory";

import "react-datepicker/dist/react-datepicker.css";
import "./datetimeSelect.css";

const DateTimeSelect = ({value, onChange}) => {
    const {t} = useTranslation();

    return (
        <>
            <DatePicker
                showTimeSelect
                minDate={GRAPH_DATA_START_TIME}
                maxDate={new Date()}
                dateFormat="yyyy년 MM월 dd일 aa h시 mm분"
                customInput={<input type="text" className="form-control btn-secondary datetime-select-input"/>}
                selected={value}
                onChange={onChange}
            />
        </>
    )
}

export default DateTimeSelect;