import { db } from "@/firebase/firebase";
import { IQuestion } from "@/interfaces/topic.interface";
import { doc, getDoc, setDoc } from "firebase/firestore";

async function addQuestions(questions: IQuestion[], topicId: string): Promise<void> {
    try {
        await setDoc(doc(db, "questions", topicId), { questions: questions });
    } catch (error) {
        console.error(error);
    }
}

async function getQuestions(topicId: string): Promise<IQuestion[]> {
    const questionRef = doc(db, "questions", topicId);

    const questionSnapshot = await getDoc(questionRef);

    if (questionSnapshot.exists()) {
        return questionSnapshot.data().questions as IQuestion[];
    }

    return [];
}

export {
    addQuestions, getQuestions
};

