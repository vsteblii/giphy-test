import request from './request';
import { Gif } from '../data/gifs';

export const fetchGifs = async (search: string, limit: number = 10): Promise<Gif[]> => {
    return request.get('gifs/search', {
        params: {
            q: search,
            limit,
        }
    }).then((response) => {
        return response?.data?.data || [];
    })
};
