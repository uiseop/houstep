import styled from '@emotion/styled';
import colors from '@assets/colors.json';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit';

interface ButtonProps {
	color?: string;
	backgroundColor?: string;
	disabled?: boolean;
	size?: ButtonSize;
	type?: ButtonType;
	borderRadius?: number;
	/**
	 * If `true`, the button will take up the full width of its container.
	 * @default false
	 */
	fullWidth?: boolean;
	content: string;
	onClick: () => void;
}

export const Button = ({
	color = colors.black,
	backgroundColor = colors.white,
	disabled = false,
	size = 'large',
	type = 'button',
	borderRadius = 0,
	fullWidth = false,
	content,
	onClick,
}: ButtonProps) => {
	return (
		<StyledButton
			disabled={disabled}
			color={color}
			backgroundColor={backgroundColor}
			borderRadius={borderRadius}
			size={size}
			fullWidth={fullWidth}
			type={type}
			onClick={onClick}
		>
			{content}
		</StyledButton>
	);
};

interface StyledButtonProps {
	color: string;
	backgroundColor: string;
	size: ButtonSize;
	borderRadius: number;
	fullWidth: boolean;
}

const StyledButton = styled.button<StyledButtonProps>(
	({ color, size, backgroundColor, borderRadius, fullWidth }) => ({
		color,
		backgroundColor,
		fontSize: `${
			size === 'large' ? '25px' : size === 'medium' ? '22px' : '18px'
		}`,
		borderRadius,
		width: `${fullWidth && '100%'}`,
		padding: `${
			size === 'large'
				? '29px 11px'
				: size === 'medium'
					? '21px 11px'
					: '13.3px 11px 12.62px'
		}`,
	}),
);
