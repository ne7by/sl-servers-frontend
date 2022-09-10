import Axios from "axios";

const instance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
});

export const getServerListAPI = (data) => {
    return instance.post(`${process.env.REACT_APP_API_URL}/servers`, data);
}

export const getServerInfoAPI = (serverId) => {
    return instance.get(`${process.env.REACT_APP_API_URL}/servers/${serverId}`);
}

export const getServerGraphAPI = (serverId, params) => {
    return instance.get(`${process.env.REACT_APP_API_URL}/servers/${serverId}/graph`, {params});
}

export const getCountryListAPI = () => {
    return instance.get(`${process.env.REACT_APP_API_URL}/stats/country`);
}

export const getCountryTrendAPI = (isoCodes, params) => {
    return instance.get(`${process.env.REACT_APP_API_URL}/stats/country/${isoCodes}/graph`, {params});
}

export const getModLoaderChartAPI = () => {
    return instance.get(`${process.env.REACT_APP_API_URL}/stats/mod-loader`);
}

export const getServerMapAPI = () => {
    return instance.get(`${process.env.REACT_APP_API_URL}/map`);
}
