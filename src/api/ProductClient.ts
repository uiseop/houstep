import axios, { AxiosInstance } from 'axios';
import { BASE_URL, PRODUCT_URL } from './URL';

/**
 * 하나의 AxiosInstance과 API를 호출하는 객체입니다.
 */
export class ProductClient {
	private httpClient: AxiosInstance;
	constructor() {
		this.httpClient = axios.create({
			baseURL: BASE_URL,
			timeout: 5000,
		});

		this.httpClient.interceptors.response.use(
			(res) => res,
			async (error) => {
				const originalRequest = error.config;

				// 요청이 실패했을 때만 재시도를 진행
				if (
					error.response &&
					error.response.status === 401 &&
					!originalRequest._retry
				) {
					originalRequest._retry = true;

					// 첫 번째 재시도
					await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
					return this.httpClient(originalRequest);
				}

				if (
					error.response &&
					error.response.status === 401 &&
					originalRequest._retry
				) {
					// 두 번째 재시도
					await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
					return this.httpClient(originalRequest);
				}

				// 최종적으로 실패했을 때
				return Promise.reject(error);
			},
		);
	}

	async allProducts() {
		return await this.httpClient.get(PRODUCT_URL);
	}

	async products(page: number) {
		return await this.httpClient.get(
			`${PRODUCT_URL}/?_page=${page}&_limit=10`,
		);
	}
}
