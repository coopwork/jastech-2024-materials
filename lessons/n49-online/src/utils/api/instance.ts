import axios from "axios";


export const authAPI = axios.create({
	baseURL: 'https://reqres.in/api',
	headers: {
		Authorization: localStorage.getItem('token')
	}
});