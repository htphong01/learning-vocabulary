import axiosClient from './axiosClient';

const API_ROUTE = 'vocabularies'
export const getAllVocabularies = () => {
    return axiosClient.get(API_ROUTE);
}

export const getVocabulariesByCollection = async (collectionId) => {
    return axiosClient.get(`${API_ROUTE}/collections/${collectionId}`);
}