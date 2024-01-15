import styled from '@emotion/styled';
import { useRouter } from '@hooks/index';
import { useEffect } from 'react';

export const Error = () => {
	const { navToOrder } = useRouter();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navToOrder();
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<Wrapper>
			주문에 실패하였습니다.
			<br />
			다시 시도해주세요.
		</Wrapper>
	);
};

const Wrapper = styled.div({
	display: 'flex',
	width: '100vw',
	height: '100vh',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
});
