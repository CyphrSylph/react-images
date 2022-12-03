import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID oHsfUmpgHiEabUvqOra0fBfbm8rUSBNASS9whrebw0s'
        },
        params: {
            query: 'term',
        }
    });
    return response.data.results;
};

export default searchImages;