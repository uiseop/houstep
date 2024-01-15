import { useProductContext } from '@context/ProductProvider';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from './useRouter';
import { CartItem, useCartStore } from '@stores/cart';

export const useGetProductList = () => {
	const { product } = useProductContext();

	return useInfiniteQuery({
		queryKey: ['products'],
		queryFn: ({ pageParam }) => product?.getProducts(pageParam),
		initialPageParam: 1,
		getNextPageParam: (res) => res?.nextPage,
	});
};

export const useGetAllProductList = () => {
	const { product } = useProductContext();

	return useQuery({
		queryKey: ['all-products'],
		queryFn: () => product?.getAllProducts(),
		refetchOnMount: false,
	});
};

export const usePostOrderList = () => {
	const { product } = useProductContext();
	const { removeAll } = useCartStore();
	const { navToComplete, navToError } = useRouter();

	return useMutation({
		mutationFn: (cart: CartItem[]) => product!.postOrder(cart),
		onSuccess: () => {
			removeAll();
			navToComplete();
		},
		onError: () => navToError(),
	});
};
