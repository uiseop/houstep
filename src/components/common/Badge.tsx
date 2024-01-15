import styled from '@emotion/styled';
import colors from '@assets/colors.json';

interface BadgeProps {
	content: string;
}

export const Badge = ({ content }: BadgeProps) => {
	return <Wrapper className="badge">{content}</Wrapper>;
};

const Wrapper = styled.span({
	fontFamily: 'Roboto',
	position: 'absolute',
	display: 'inline-block',
	backgroundColor: colors.primary,
	color: colors.white,
	borderRadius: 10,
	fontSize: 13,
	letterSpacing: '0.16px',
	lineHeight: '16px',
	padding: '3px 8px 4px',
});
