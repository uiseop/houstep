import { useProductContext } from '@context/ProductProvider';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

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
