import countries from 'i18n-iso-countries';
import i18nEn from 'i18n-iso-countries/langs/en.json'
import i18nKo from 'i18n-iso-countries/langs/ko.json'
import i18nRu from 'i18n-iso-countries/langs/ru.json'
import i18nUk from 'i18n-iso-countries/langs/uk.json'
import i18nZh from 'i18n-iso-countries/langs/zh.json'
import i18nEs from 'i18n-iso-countries/langs/es.json'
import i18nPl from 'i18n-iso-countries/langs/pl.json'
import i18nCa from 'i18n-iso-countries/langs/ca.json'
import i18nFr from 'i18n-iso-countries/langs/fr.json'
import i18nTr from 'i18n-iso-countries/langs/tr.json'
import i18nTh from 'i18n-iso-countries/langs/th.json'
import i18nIt from 'i18n-iso-countries/langs/it.json'
import i18nDe from 'i18n-iso-countries/langs/de.json'

const I18nIsoCountries = () => {
    countries.registerLocale(i18nEn);
    countries.registerLocale(i18nKo);
    countries.registerLocale(i18nRu);
    countries.registerLocale(i18nRu);
    countries.registerLocale(i18nUk);
    countries.registerLocale(i18nZh);
    countries.registerLocale(i18nEs);
    countries.registerLocale(i18nPl);
    countries.registerLocale(i18nCa);
    countries.registerLocale(i18nFr);
    countries.registerLocale(i18nTr);
    countries.registerLocale(i18nTh);
    countries.registerLocale(i18nIt);
    countries.registerLocale(i18nDe);

    return countries;
}

export default I18nIsoCountries;
