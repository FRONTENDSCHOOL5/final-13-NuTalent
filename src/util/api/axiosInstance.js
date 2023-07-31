import axios from 'axios';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const setupInterceptor = (token) => {
  const interceptorId = instance.interceptors.request.use((config) => {
    if (config.url === '/image/uploadfile') {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  });

  return interceptorId;
};
