import { db } from "@/firebase/firebase"
import { ITopic, ITopicWithouId } from "@/interfaces/topic.interface"
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { wrapPromise } from "../wrapPromise"

async function addTopic(topic: ITopicWithouId): Promise<string> {
    const docRef = await addDoc(collection(db, "topics"), topic)
    return docRef.id
}

async function getTopic(topicId: string): Promise<ITopic | null> {
    const docRef = doc(db, "topics", topicId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data() as Omit<ITopic, "id">
        }
    } else {
        return null
    }
}

const getTopics = () => {
    const q = query(collection(db, "topics"), where("isPublished", "==", true))


    const querySnapshot: Promise<ITopic[]> = getDocs(q)
        .then((querySnapshot) => {
            const topics: ITopic[] = []

            querySnapshot.forEach((doc) => {
                topics.push({
                    id: doc.id as string,
                    ...doc.data() as Omit<ITopic, "id">
                })
            })

            console.log(topics)

            return topics
        })



    return wrapPromise<ITopic[]>(querySnapshot)
}

export {
    addTopic, getTopic, getTopics
}

