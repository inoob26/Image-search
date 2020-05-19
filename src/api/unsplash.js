import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MSUZQzgo5vwLVqM9fJxRplEYPxMLsN0N0bc1nbNUhns'
    }
});