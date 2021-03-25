
import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://api.giphy.com/v1/',
    params: {
        // todo have to be moved to env variables
        api_key: 'MPagf7eaBYKvQy94vp8AxEvTodsN0e1u',
    }
  });
export default instance;

