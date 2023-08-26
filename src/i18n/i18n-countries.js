import {getName, overwrite} from 'country-list';

overwrite([{
    code: 'TW',
    name: 'Taiwan'
}])

const getCountryName = (isoCode) => {
    return getName(isoCode);
}

export default getCountryName;
