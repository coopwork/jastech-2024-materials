import axios from 'axios';

export const jsonPlaceholderAPI = axios.create({
  baseURL: import.meta.env.VITE_JSON_PLACEHOLDER_API_URL,
});
