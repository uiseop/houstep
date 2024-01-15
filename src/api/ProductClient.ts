import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from './URL';

export class ProductClient {
	private httpClient: AxiosInstance;
	constructor() {
		this.httpClient = axios.create({
			baseURL: BASE_URL,
		});
	}

	async allProducts() {
		return await this.httpClient.get('/');
	}

	async products(page: number) {
		return await this.httpClient.get(`/?_page=${page}&_limit=5`);
	}
}
