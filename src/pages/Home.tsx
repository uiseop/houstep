import styled from '@emotion/styled';
import { useRouter } from '@hooks/useRouter';

import colors from '@assets/colors.json';
import { Button } from '@components/common';
import { LogoBig } from '@assets/icons';

export const Home = () => {
	const { navToOrder } = useRouter();

	return (
		<Wrapper>
			<LogoBig />
			<Button
				onClick={navToOrder}
				content="주문하러 가기"
				borderRadius={20}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.main({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
	gap: 41,
	backgroundColor: colors.black,
});
