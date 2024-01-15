import { ProductClient, ProductService } from '@api/index';
import { createContext, useContext } from 'react';

const productClient = new ProductClient();
const product = new ProductService(productClient);

interface ProductContextProps {
	product: ProductService | undefined;
}

interface ProductProviderProps {
	children: React.ReactNode;
}

const ProductContext = createContext<ProductContextProps>({
	product: undefined,
});

export const useProductContext = () => {
	return useContext(ProductContext);
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
	return (
		<ProductContext.Provider value={{ product }}>
			{children}
		</ProductContext.Provider>
	);
};
