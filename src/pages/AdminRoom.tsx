
import { useHistory, useParams } from 'react-router-dom';

import { Button } from "../components/_Button";
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

import { RoomCode } from "../components/_RoomCode/RoomCode";
import { Question } from '../components/_Question';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { StyledPageRoom } from '../styles/room';

type RoomParams = {
	id: string;
}

export function AdminRoom() {
	//const {user} = useAuth();
	const history = useHistory();
	const params = useParams<RoomParams>();
	const roomId = params.id;
   const { questions, title } = useRoom(roomId);

	async function handleDeleteQuestion(questionId: string) {
		if(window.confirm('Tem certeza que deseja excluir está pergunta?')) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
		}
	}

	async function handleCheckQuestionAsAnswered(questionId: string) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
				isAnswered: true,
			});
	}

	async function handleHighlightQuestion(questionId: string) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
				isHighlighted: true,
			});
	}

	async function handleEndRoom() {
		database.ref(`rooms/${roomId}`).update( {
			endedAt: new Date(),
		})

		history.push('/');
	}

	return (
		<StyledPageRoom>
			<header>
				<div className="content">
					<img src={logoImg} alt="Letmeask" />
               <div>
                  <RoomCode code={roomId} />
                  <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button> 
               </div>
				</div>
			</header>
			<main>
				<div className="room-title">
					<h1>Sala {title}</h1>
					{questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
				</div>
				

            <div className="question-list">
               {questions.map(question =>{
                  return (
                     <Question
                        key={question.id} //TODO: Algoritmo de reconciliação
                        content={question.content}
                        author={question.author}
								isAnswered={question.isAnswered}
								isHighlighted={question.isHighlighted}
                     > 

								<button
									type="button"
									onClick={() => handleCheckQuestionAsAnswered(question.id)}
								>
									<img src={checkImg} alt="Marcar pergunta como respondida" />
								</button>

								{!question.isAnswered && (
									<button
										type="button"
										onClick={() => handleHighlightQuestion(question.id)}
									>
										<img src={answerImg} alt="Dar destaque à pergunta" />
									</button>
								)} 
								<button
									type="button"
									onClick={() => handleDeleteQuestion(question.id)}
								>
									<img src={deleteImg} alt="Remover pergunta" />
								</button>
							</Question>
                  )
               })}
            </div>
			</main>
		</StyledPageRoom>
	);
}
