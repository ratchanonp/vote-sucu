import { ITopic } from "@/interfaces/topic.interface";
import { getTopic } from "@/utils/topics/topics";
import { useEffect, useState } from "react";

export function useGetTopic(topicId: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [topic, setTopic] = useState<ITopic | null>(null);

    useEffect(() => {

        const fetchTopic = async () => {
            try {
                const topic = await getTopic(topicId)
                setTopic(topic)
                setIsLoading(false)
                setIsError(false)
            } catch (error) {
                setIsLoading(false)
                setIsError(true)
            }
        }

        fetchTopic()

    }, [topicId])

    return { topic, isLoading, isError }
}