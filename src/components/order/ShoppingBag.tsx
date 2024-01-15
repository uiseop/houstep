import styled from '@emotion/styled';
import { Button } from '..';
import colors from '@assets/colors.json';
import { addCommasToNumber } from '@utils/index';

export const ShoppingBag = () => {
	return (
		<Wrapper>
			<OrderInfo>
				<li>총 수량: {addCommasToNumber(0)}개</li>
				<li>총 가격: {addCommasToNumber(0)}원</li>
			</OrderInfo>
			<Button
				loadingContent="로딩중..."
				content="주문하기"
				fullWidth
				size="small"
				backgroundColor={colors.black}
				color={colors.white}
				onClick={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div({
	position: 'absolute',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '18.46px',
	height: 170,
	padding: '23px 27px 27.38px 22px',
	bottom: 0,
	borderRadius: '20px 20px 0 0',
	boxShadow: '0 -4px 10px 0 rgba(0, 0, 0, 0.25)',
	backgroundColor: colors.white,
});

const OrderInfo = styled.ul({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'end',
	gap: '0.76px',
	width: 166,

	'& li': {
		textAlign: 'end',
	},
});
