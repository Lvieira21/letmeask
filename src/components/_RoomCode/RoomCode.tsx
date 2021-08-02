import copyImg from '../../assets/images/copy.svg';
import { StyledRoomCode } from './styles';

type RoomCodeProps = {
	code: string;
}

export function RoomCode(props: RoomCodeProps) {
	function copyRoomCodeToClipboard() {
		navigator.clipboard.writeText(props.code)
	}

	return (
		<StyledRoomCode onClick={copyRoomCodeToClipboard}>
			<div>
				<img src={copyImg} alt="Copy room code" />
			</div>
			<span>Sala #{props.code}</span>
		</StyledRoomCode>
	)
}