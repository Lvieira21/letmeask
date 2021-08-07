import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { Button } from '../components/_Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';

import { StyledPageAuth } from '../styles/auth';
import { Logo } from '../components/_Logo';
export function NewRoom () {
	const {user} = useAuth();
	const history = useHistory();
	const [newRoom, setNewRoom] = useState('');

	async function handleCreateRoom(event: FormEvent) {
		event.preventDefault();

		if (newRoom.trim() === '') {
			return;
		}

		const roomRef = database.ref('rooms');
		const firebaseRoom = await roomRef.push({
			title: newRoom.trim(),
			authorId: user?.id,
		});

		history.push(`/rooms/${firebaseRoom.key}`)
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
					<Logo />
					<h2>Criar uma nova sala</h2>
					<form onSubmit={handleCreateRoom}>
						<input type="text" 
							placeholder="Nome da sala" 
							onChange={event => setNewRoom(event.target.value)}
							value={newRoom}
						/>
						<Button type="submit">Criar sala</Button>
					</form>
					<p>
						Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
					</p>
				</div>
			</main>
		</StyledPageAuth>
	)
}