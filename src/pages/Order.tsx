import { Header, ShoppingBag } from '@components/order';
import { Card, CardProps } from '@components/order/Card';
import styled from '@emotion/styled';

export const Order = () => {
	return (
		<>
			<Header />
			<CardContainer>
				{items.map((item: CardProps) => {
					return <Card key={item.id} {...item} />;
				})}
			</CardContainer>
			<ShoppingBag />
		</>
	);
};

const items = [
	{
		id: '39843-2',
		name: 'A 벽지',
		event: 1,
		materialType: 1,
		price: 100000,
	},
	{
		id: '32843-3',
		name: 'B 벽지',
		event: 0,
		materialType: 1,
		price: 120000,
	},
	{
		id: '34878-3',
		name: 'C 벽지',
		event: 0,
		materialType: 1,
		price: 90000,
	},
	{
		id: '47429-1',
		name: 'D 벽지',
		event: 0,
		materialType: 1,
		price: 130000,
	},
	{
		id: '31321-1',
		name: 'E 마루',
		event: 0,
		materialType: 2,
		price: 150000,
	},
	{
		id: '82143-3',
		name: 'F 마루',
		event: 0,
		materialType: 2,
		price: 180000,
	},
	{
		id: '43823-2',
		name: 'G 데코타일',
		event: 1,
		materialType: 3,
		price: 120000,
	},
	{
		id: '85622-1',
		name: 'H 마루',
		event: 0,
		materialType: 2,
		price: 130000,
	},
	{
		id: '39323-4',
		name: 'I 데코타일',
		event: 1,
		materialType: 3,
		price: 100000,
	},
	{
		id: '57389-2',
		name: 'J 마루',
		event: 0,
		materialType: 2,
		price: 110000,
	},
	{
		id: '47342-3',
		name: 'K 벽지',
		event: 0,
		materialType: 1,
		price: 80000,
	},
];

const CardContainer = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 18px;
	margin: 18px 24px auto 25px;
`;
