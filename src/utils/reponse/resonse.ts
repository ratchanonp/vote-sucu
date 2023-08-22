import { db } from "@/firebase/firebase";
import { IResponse } from "@/interfaces/response.interface";
import { addDoc, collection } from "firebase/firestore";
import { increaseParticipant } from "../topics/topics";

async function postResponse(response: IResponse): Promise<string> {

    const timestamp = new Date().toISOString();

    const docRef = await addDoc(collection(db, "responses"), {
        ...response,
        timestamp: timestamp
    });

    await increaseParticipant(response.topicId);

    const localPayload = {
        responseId: docRef.id,
        timestamp: timestamp
    }

    const oldLocalStorage = localStorage.getItem("responses");
    if (oldLocalStorage) {
        const oldResponses = JSON.parse(oldLocalStorage);
        const newResponses = [...oldResponses, localPayload];

        localStorage.setItem("responses", JSON.stringify(newResponses));
    } else {
        localStorage.setItem("responses", JSON.stringify([localPayload]));
    }

    return docRef.id;
}

export {
    postResponse
};

