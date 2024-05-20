import axios, { AxiosInstance } from 'axios';
const host = "http://localhost:3008";
const apiUrl = "/api/v1";
const baseURL: string =`${host}${apiUrl}`;
export const axiosClient: AxiosInstance = axios.create({
	baseURL,
	timeout: 2000,
	headers: {
		MyHeader: 'MyHeader',
	},
});