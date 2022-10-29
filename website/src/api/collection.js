import axiosClient from './axiosClient';

const API_ROUTE = 'collections'
export const getAllCollections = () => {
    return axiosClient.get(API_ROUTE);
}