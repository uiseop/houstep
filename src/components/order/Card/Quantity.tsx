import styled from '@emotion/styled';
import { addCommasToNumber } from '@utils/index';
import { useCartStore } from '@stores/cart';
import { Product } from 'src/models';

interface QuantityProps {
	product: Product;
}

export const Quantity = ({ product }: QuantityProps) => {
	const { add, remove, getItemQuantity } = useCartStore();

	const handleMinusClick = () => {
		remove(product.id);
	};

	const handlePlusClick = () => {
		add(product);
	};

	return (
		<Wrapper>
			<button onClick={handleMinusClick}>-</button>
			<span>{addCommasToNumber(getItemQuantity(product.id))}</span>
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
		min-width: 19px;
		height: 22px;
		background-color: transparent;
	}
`;
