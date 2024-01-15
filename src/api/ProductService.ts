import { Product } from 'src/models';
import { ProductClient } from './ProductClient';
import { ProductResponse } from './responseTypes';

/**
 * ProductClient(httpClient)를 통해 API(비즈니스로직)를 요청하는 서비스 클래스입니다.
 */
export class ProductService {
	private productClient: ProductClient;
	constructor(productClient: ProductClient) {
		this.productClient = productClient;
	}

	async getAllProducts(): Promise<Product[]> {
		return await this.productClient.allProducts().then((res) => res.data);
	}

	async getProducts(page: number): Promise<ProductResponse> {
		const data: Product[] = await this.productClient
			.products(page)
			.then((res) => res.data);

		return {
			data,
			nextPage: data.length ? page + 1 : null,
		};
	}
}
