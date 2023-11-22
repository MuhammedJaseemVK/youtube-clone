import axios from 'axios';

export const fetchFromAPI = async (url) => {
    const apiKey = process.env.REACT_APP_API_KEY
    const BASE_URL = 'https://youtube-v311.p.rapidapi.com'
    const options = {
        params: {
            part: 'snippet',
            maxResults: '5',
            order: 'relevance',
            safeSearch: 'moderate',
          },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
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
