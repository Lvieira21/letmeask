import styled from "styled-components";

export const StyledButton = styled.button`
	height: 50px;
	border-radius: 8px;
	font-weight: 500;
	background: ${prop => prop.theme.colors.primary};
	color: ${prop => prop.theme.colors.secondary};
	padding: 0 32px;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	border: 0;

	transition: filter 0.2s;

	img {
		margin-right: 8px;
	}

	&.outlined {
		background: ${props => props.theme.colors.secondary};
		border: 1px solid ${props => props.theme.colors.primary};
		color: ${props => props.theme.colors.primary};
	}

	&:not(:disabled):hover {
		filter: brightness(0.9);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;