import styled from '@emotion/styled';

import colors from '@assets/colors.json';
import { LogoSmall } from '@assets/icons';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<Wrapper>
			<Link to="/">
				<LogoSmall />
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.header({
	height: 57,
	backgroundColor: colors.black,
	display: 'flex',
	alignItems: 'center',
	padding: '0 12px',
	boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
});
