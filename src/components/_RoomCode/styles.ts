import styled from 'styled-components'

export const StyledRoomCode = styled.button`
	height: 40px;
	border-radius: 8px;
	overflow: hidden;

	background: #fff;
	border: 1px solid #835afd;
	cursor: pointer;

	display: flex;

	div {
		height: 100%;
		background: #835afd;
		padding: 0 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	span {
		height: 100%;
		display: block;
		align-items: center;
		flex: 1;
		padding: 10px 16px 10px 12px;
		width: 240px;
		font-size: 14px;
		font-weight: 500;
	}
`;

