import axios from 'axios';

const api_key = '53508808-db25438414f7039efcc38d51b';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
        const params = {
            key: api_key,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15,
    };
    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
            console.error('Error in getImagesByQuery:', error);
            throw error;
        };
    }