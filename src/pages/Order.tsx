import { Header, ShoppingBag } from '@components/order';
import { Card } from '@components/order/Card';
import styled from '@emotion/styled';
import { useGetAllProductList } from '@hooks/useProductApi';
import { Product } from 'src/models';

export const Order = () => {
	const { isLoading, isError, data: products } = useGetAllProductList();

	if (isLoading)
		return (
			<>
				<Header />
				<LoadingContainer>
					목록을
					<br />
					불러오고 있습니다.
				</LoadingContainer>
				<ShoppingBag disabled />
			</>
		);

	if (isError)
		return (
			<>
				<Header />
				<LoadingContainer>
					오류가 발생했습니다.
					<br />
					잠시후 다시 사용해주세요.
				</LoadingContainer>
				<ShoppingBag disabled />
			</>
		);

	return (
		<>
			<Header />
			<CardContainer>
				{products?.map((product: Product) => {
					return <Card key={product.id} product={product} />;
				})}
			</CardContainer>
			<ShoppingBag />
		</>
	);
};

const CardContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 18px;
	margin: 75px 24px 188px 25px;
`;

const LoadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 100vh;
`;
