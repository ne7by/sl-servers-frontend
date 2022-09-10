import React, {useMemo} from 'react';
import Select from "react-select";
import languages from "../../data/language.json";
import getStyles from "../SelectCustomStyles";
import i18n from "i18next";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const LanguageSelect = () => {
    const {t} = useTranslation();
    const customStyles = useMemo(() => getStyles(100), []);
    const languageOptions = languages.map(language => {
        return {
            value: language.code,
            label: language.name
        }
    })

    const handleChangeLanguage = (option) => {
        i18n.changeLanguage(option.value).then(() => {
            toast.success(t('general.language-change', {language: option.label}));
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
