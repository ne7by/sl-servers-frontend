import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

const DropdownSelect = (
    {
        options,

        value,
        onChange
    }
) => {
    return (
        <DropdownButton size="sm" title={value.label}>
            {options.map((option, index) => (
                <Dropdown.Item key={index} onClick={() => onChange(option)}>{option.label}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default DropdownSelect;
