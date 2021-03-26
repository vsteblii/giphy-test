
import axios from 'axios';
const apiKey = process.env.REACT_APP_GIPHY_API_KEY || '';

const instance = axios.create({
    baseURL: 'http://api.giphy.com/v1/',
    params: {
        api_key: apiKey,
    }
  });
export default instance;

