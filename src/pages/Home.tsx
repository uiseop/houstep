import styled from '@emotion/styled';
import colors from '@assets/colors.json';
import { Button } from '@components/common';
import { useNavigate } from 'react-router-dom';
import { LogoBig } from '@assets/icons';

export const Home = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/order');
	};

	return (
		<Wrapper>
			<LogoBig />
			<Button
				onClick={handleClick}
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
