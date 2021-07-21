import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type QuestionType = {
   id: string;
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
   likeCount: number;
   likeId: string | undefined;
}

type FirebaseQuestions = Record<string, {
	author: {
		name: string;
		avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
   likes: Record<string, {authorId: string}>;
}>

export function useRoom(roomId: string) {

   const { user } = useAuth();
   const [questions, setQuestions] = useState<QuestionType[]>([]);
   const [title, setTitle] = useState('');

   useEffect(() => {
         const roomRef = database.ref(`rooms/${roomId}`);

         roomRef.on('value', room => {
            const databaseRoom = room.val()
            const firebaseQuestions : FirebaseQuestions = databaseRoom.questions;

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
               return {
                  id: key,
                  content: value.content,
                  author: value.author,
                  isHighlighted: value.isHighlighted,
                  isAnswered: value.isAnswered,
                  likeCount: Object.values(value.likes ?? {}).length,
                  likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
                  // ?. Verifica se o que está antes tem valor, e se tiver, acessa a posição do array designada, se nao tiver valor, nao tenta acessar nada.
               }
            }) //val() é uma API do firebase

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
         })

         return () => {
            roomRef.off('value');
         }
      }, [roomId, user?.id]); //Se o array está vazio, ele é executado apenas na primeira vez que carrega (Toda vez que mudar o que está na Array, o hook é executado novamente)


      return {questions, title}
}