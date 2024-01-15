import styled from '@emotion/styled';
import { useState } from 'react';
import { addCommasToNumber } from '@utils/index';
import { useCartStore } from '@stores/cart';
import { Product } from 'src/models';

interface QuantityProps {
	initQuantity?: number;
	id: string;
	name: string;
	price: number;
}

export const Quantity = ({ id, name, price }: QuantityProps) => {
	const { add, remove, getItemQuantity } = useCartStore();
	const product = { id, name, price } as Product;

	const handleMinusClick = () => {
		remove(id);
	};

	const handlePlusClick = () => {
		add(product);
	};

	return (
		<Wrapper>
			<button onClick={handleMinusClick}>-</button>
			<span>{addCommasToNumber(getItemQuantity(id))}</span>
			<button onClick={handlePlusClick}>+</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	grid-area: quantity;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 22px;
	justify-self: start;
	align-self: flex-end;

	& > * {
		text-align: center;
		width: 19px;
		height: 22px;
		background-color: transparent;
	}
`;
