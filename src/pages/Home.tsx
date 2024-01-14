import styled from '@emotion/styled';
import { ReactComponent as LogoBig } from '@assets/icons/LogoBig.svg';
import colors from '@assets/colors.json';
import { Button } from '@components/common';

export const Home = () => {
	return (
		<Wrapper>
			<LogoBig />
			<Button content="주문하러 가기" borderRadius={20} />
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
