import styled from '@emotion/styled';
import { Quantity } from './Quantity';
import { addCommasToNumber } from '@utils/index';
import { Badge } from '@components/common/Badge';
import { Product } from 'src/models';

export const Card = ({ id, name, event, materialType, price }: Product) => {
	return (
		<Wrapper isActive={false}>
			<img src="/images/defaultImage.png" alt="product image" />
			<CardInfoWrapper>
				<Heaedr>
					<Title>{name}</Title>
					{event ? <Badge content="이벤트" /> : ''}
				</Heaedr>
				<DescriptionWrapper>
					<Quantity id={id} name={name} price={price} />
					<Price>{addCommasToNumber(price)}원</Price>
				</DescriptionWrapper>
			</CardInfoWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.article<{ isActive: boolean }>(({ isActive }) => ({
	display: 'flex',
	padding: '9px 12px',
	gap: 8,
	border: `1px solid ${
		isActive ? 'rgba(247, 90, 47, 0.10)' : 'rgba(0, 0, 0, 0.30)'
	}`,
	borderRadius: '10px',
	minWidth: '250px',

	'& img': {
		width: 62,
		height: 62,
	},
}));

const CardInfoWrapper = styled.div({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	flex: 1,
});

const Heaedr = styled.header({
	position: 'relative',

	'& .badge': {
		top: '-1px',
	},
});

const Title = styled.span({
	display: 'inline-block',
	padding: '0 7px',
	height: 22,
});

const DescriptionWrapper = styled.main({
	display: 'flex',
	position: 'relative',
	justifyContent: 'space-between',
	flex: 1,
});

const Price = styled.span({
	position: 'absolute',

	right: '-4px',
	bottom: '-1px',
});
