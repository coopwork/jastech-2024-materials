import axios from "axios";


export const baseAPI = axios.create({
	baseURL: import.meta.env.VITE_BASE_API_URL,
});