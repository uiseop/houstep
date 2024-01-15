import styled from '@emotion/styled';
import { useState } from 'react';
import { addCommasToNumber } from '@utils/index';

interface QuantityProps {
	initQuantity?: number;
}

export const Quantity = ({ initQuantity = 0 }: QuantityProps) => {
	const [quantity, setQuantity] = useState(initQuantity);

	const handleMinusClick = () => {
		setQuantity((pre) => pre - 1);
	};

	const handlePlusClick = () => {
		setQuantity((pre) => pre + 1);
	};

	return (
		<Wrapper>
			<button onClick={handleMinusClick}>-</button>
			<span>{addCommasToNumber(quantity)}</span>
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
