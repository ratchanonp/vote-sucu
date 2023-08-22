import { db } from "@/firebase/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

async function haveSign(
    topicId: string,
    ouid: string
): Promise<boolean> {

    const signsRef = collection(db, "signs");
    const q = query(
        signsRef,
        where("topicId", "==", topicId),
        where("ouid", "==", ouid)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return false;
    else return true;
}

async function doSign(
    topicId: string,
    ouid: string,
): Promise<string | null> {

    if (await haveSign(topicId, ouid)) {
        window.location.href = "/error"
        return null;
    }

    const signsRef = collection(db, "signs");
    try {
        const docRef = await addDoc(signsRef, {
            topicId: topicId,
            ouid: ouid,
            timestamp: new Date().toISOString()
        });

        return docRef.id;

    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}


export { doSign, haveSign };

