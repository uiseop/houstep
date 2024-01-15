import { Product } from 'src/models';
import { create } from 'zustand';

interface CartItem extends Product {
	quantity: number;
}

interface CartStore {
	cart: CartItem[];
	getTotalQuantities: () => number;
	getTotalPrices: () => number;
	getItemQuantity: (productId: string) => number;
	add: (product: Product) => void;
	remove: (productId: string) => void;
	removeAll: () => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
	cart: [],
	getTotalQuantities: () => {
		const { cart } = get();
		if (cart.length) {
			return cart
				.map((item) => item.quantity)
				.reduce((prev, curr) => prev + curr);
		}
		return 0;
	},
	getTotalPrices: () => {
		const { cart } = get();
		if (cart.length) {
			return cart
				.map((item) => item.price * item.quantity)
				.reduce((prev, curr) => prev + curr);
		}
		return 0;
	},
	getItemQuantity: (productId) => {
		const { cart } = get();
		const productOnCart = cart.find((item) => item.id === productId);
		return productOnCart ? productOnCart.quantity : 0;
	},
	add: (product) => {
		const { cart } = get();
		const updatedCart = updateCart(product, cart);
		set({ cart: updatedCart });
	},
	remove: (productId) => {
		const { cart } = get();
		const updatedCart = removeCart(productId, cart);
		set({ cart: updatedCart });
	},
	removeAll: () => set({ cart: [] }),
}));

function updateCart(product: Product, cart: CartItem[]): CartItem[] {
	const cartItem = { ...product, quantity: 1 } as CartItem;

	const productOnCart = cart.find((item) => item.id === product.id);

	if (!productOnCart) cart.push(cartItem);
	else {
		return cart.map((item) => {
			if (item.id === product.id) {
				return { ...item, quantity: item.quantity + 1 } as CartItem;
			}
			return item;
		});
	}

	return cart;
}

function removeCart(productId: string, cart: CartItem[]): CartItem[] {
	return cart
		.map((item) => {
			if (item.id === productId) {
				return { ...item, quantity: item.quantity - 1 };
			}
			return item;
		})
		.filter((item) => {
			return item.quantity;
		});
}
