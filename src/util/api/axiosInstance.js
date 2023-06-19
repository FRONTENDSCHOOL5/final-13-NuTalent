import axios from 'axios';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';

export const instance = axios.create({
    baseURL: BASE_URL
})