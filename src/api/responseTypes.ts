import { Product } from 'src/models';

export interface ProductResponse {
	data: Product[];
	nextPage: number | null;
}
