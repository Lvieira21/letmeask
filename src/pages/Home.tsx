import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/_Button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState, useContext } from 'react';
import { database } from '../services/firebase';
import { StyledPageAuth } from '../styles/auth';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface Props {
	toggleTheme(): void;
}

export function Home (props: Props) {
	const { colors, title } = useContext(ThemeContext);
	const history = useHistory();
	const { user, signInWithGoogle } = useAuth();
	const [roomCode, setRoomCode] = useState('');

	async function handleCreateRoom() {

		if (!user) {
			await signInWithGoogle();
		}
		
		history.push('/rooms/new');
	}

	async function handleJoinRoom(event: FormEvent) {
		event.preventDefault();

		if (roomCode.trim() === '') {
			return;
		}
		const roomRef = await database.ref(`rooms/${roomCode}`).get();

		if (!roomRef.exists()) {
			alert('Room does not exist.')
			return;
		}

		if (roomRef.val().endedAt) {
			alert('Room already closed.')
			return;
		}

		history.push(`rooms/${roomCode}`);
	}

	return (
		<StyledPageAuth>
			<aside>
				<img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire as dúvidas da sua audiência em tempo real</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={logoImg} alt="Letmeask" />   
					<div className="switch-container">
						<Switch 
							onChange={props.toggleTheme}
							checked={title === 'dark'}
							checkedIcon={false}
							uncheckedIcon={false}
							height={10}
							width={40}
							handleDiameter={20}
							onHandleColor={shade(0.15, colors.background)}
							onColor={colors.primary}
						/>
					</div>   
					<button onClick={handleCreateRoom} className="create-room">
						<img src={googleIconImg} alt="Logo da Google" />
							Crie sua sala com o Google
					</button>
					<div className="separator">
						ou entre em uma sala
					</div>
					<form onSubmit={handleJoinRoom}>
						<input type="text" placeholder="Digite o código da sala" onChange={event => setRoomCode(event.target.value)}
						value={roomCode}/>
						<Button type="submit">Entrar na sala</Button>
					</form>
				</div>
			</main>
		</StyledPageAuth>
	)
}