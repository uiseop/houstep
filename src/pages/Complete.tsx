import { CheckFilled } from '@assets/icons';
import styled from '@emotion/styled';
import { useRouter } from '@hooks/index';
import { useEffect } from 'react';

export const Complete = () => {
	const { navToOrder } = useRouter();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navToOrder();
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<Wrapper>
			<CheckFilled />
			<span>주문이 완료되었습니다.</span>
		</Wrapper>
	);
};

const Wrapper = styled.div({
	display: 'flex',
	flexDirection: 'column',
	width: '100vw',
	height: '100vh',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
});
