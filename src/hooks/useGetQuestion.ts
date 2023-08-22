// create a custom hook to get a question from the API

import { IQuestion } from "@/interfaces/topic.interface";
import { getQuestions } from "@/utils/question/question";
import { useEffect, useState } from "react";

const useGetQuestions = (topicId: string) => {
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchQuestions = async () => {

            try {
                const questions = await getQuestions(topicId);
                setQuestions(questions);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        };

        fetchQuestions();

    }, [topicId]);

    return { questions, isLoading, isError };
};

export { useGetQuestions };
