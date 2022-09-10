import React, {useMemo} from 'react';
import Select from "react-select";
import languages from "../../data/language.json";
import getStyles from "../SelectCustomStyles";
import i18n from "i18next";
import {toast} from "react-toastify";

const LanguageSelect = () => {
    const customStyles = useMemo(() => getStyles(100), []);
    const languageOptions = languages.map(language => {
        return {
            value: language.code,
            label: language.name
        }
    })

    const handleChangeLanguage = (option) => {
        i18n.changeLanguage(option.value).then(() => {
            toast.success(`언어를 ${option.label} (으)로 변경했습니다. 일부는 새로고침이 필요할 수도 있습니다.`);
        })
    }

    return (
        <Select
            classNamePrefix="select"
            isSearchable
            name="lang-select"
            options={languageOptions}
            styles={customStyles}

            value={languageOptions.find(option => option.value === i18n.language)}
            onChange={handleChangeLanguage}
        />
    );
}

export default LanguageSelect;
