import styled from '@emotion/styled';
import colors from '@assets/colors.json';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit';

interface ButtonProps {
	color?: string;
	backgroundColor?: string;
	disabled?: boolean;
	loading?: boolean;
	disabledBackColor?: string;
	loadingContent?: string;
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
	disabledBackColor = colors.grey,
	loading = false,
	loadingContent = 'loading...',
	onClick,
}: ButtonProps) => {
	return (
		<StyledButton
			disabled={disabled || loading}
			color={color}
			backgroundColor={backgroundColor}
			disabledBackColor={disabledBackColor}
			borderRadius={borderRadius}
			size={size}
			fullWidth={fullWidth}
			type={type}
			onClick={onClick}
		>
			{loading ? loadingContent : content}
		</StyledButton>
	);
};

interface StyledButtonProps {
	color: string;
	backgroundColor: string;
	disabledBackColor: string;
	size: ButtonSize;
	borderRadius: number;
	fullWidth: boolean;
	disabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>(
	({
		color,
		size,
		backgroundColor,
		borderRadius,
		fullWidth,
		disabledBackColor,
	}) => ({
		color,
		fontFamily: 'inherit',
		backgroundColor,
		lineHeight: '1.2',
		letterSpacing: '-1.7px',
		wordSpacing: '-1px',
		fontSize: `${
			size === 'large' ? '25px' : size === 'medium' ? '22px' : '18px'
		}`,
		borderRadius,
		width: `${fullWidth ? '100%' : 'auto'}`,
		padding: `${
			size === 'large'
				? '29px 13px'
				: size === 'medium'
					? '21px 11px'
					: '13.3px 11px 12.62px'
		}`,
		'&:disabled': {
			backgroundColor: disabledBackColor,
		},
	}),
);
