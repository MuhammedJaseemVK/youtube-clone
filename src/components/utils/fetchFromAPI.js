import axios from 'axios';

export const fetchFromAPI = async (url) => {
    const apiKey = process.env.REACT_APP_API_KEY
    const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
    const options = {
        params: {
            maxResults: '50',
        },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
    }
}
