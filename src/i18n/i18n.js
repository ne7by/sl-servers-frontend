import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import enUS from './locale/en-US.json';
import koKR from './locale/ko-KR.json';
import ruRU from './locale/ru-RU.json';
import ukUA from './locale/uk-UA.json';
import zhCN from './locale/zh-CN.json';
import zhTW from './locale/zh-TW.json';
import esES from './locale/es-ES.json';
import plPL from './locale/pl-PL.json';
import caES from './locale/ca-ES.json';
import frFR from './locale/fr-FR.json';
import trTR from './locale/tr-TR.json';
import thTH from './locale/th-TH.json';
import itIT from './locale/it-IT.json';
import lijIT from './locale/lij-IT.json';
import deDE from './locale/de-DE.json';

const resource = {
    "en-US": {
        translation: enUS
    },
    "ko-KR": {
        translation: koKR
    },
    "ru-RU": {
        translation: ruRU
    },
    "uk-UA": {
        translation: ukUA
    },
    "zh-CN": {
        translation: zhCN
    },
    "zh-TW": {
        translation: zhTW
    },
    "es-ES": {
        translation: esES
    },
    "pl-PL": {
        translation: plPL
    },
    "ca-ES": {
        translation: caES
    },
    "fr-FR": {
        translation: frFR
    },
    "tr-TR": {
        translation: trTR
    },
    "th-TH": {
        translation: thTH
    },
    "it-IT": {
        translation: itIT
    },
    "lij-IT": {
        translation: lijIT
    },
    "de-DE": {
        translation: deDE
    }
}

const languageDetectorOption = {
    // order and from where user language should be detected
    order: ['cookie', 'navigator'],

    // keys or params to lookup language from
    lookupCookie: 'user.language',

    // cache user language on
    caches: ['cookie']
}

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: resource,
        fallbackLng: 'en-US',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        detection: languageDetectorOption
    }).then(r => {
});

export default i18n;
