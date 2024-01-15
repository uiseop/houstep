import { Product } from 'src/models';
import { ProductClient } from './ProductClient';
import { OrderResponse, ProductResponse } from './responseTypes';
import { CartItem } from '@stores/cart';

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

	async postOrder(cartItems: CartItem[]): Promise<OrderResponse> {
		const res = await this.productClient
			.postProduct(cartItems)
			.then((res) => res.data);

		return res;
	}
}
