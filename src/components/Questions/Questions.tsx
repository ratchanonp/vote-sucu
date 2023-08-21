import { useGetQuestions } from "@/hooks/useGetQuestion";
import { setCanSubmit } from "@/redux/features/answerSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Question } from "./Question";
import { QuestionLoading } from "./Question.loading";


function Questions() {

    const dispatch = useDispatch();
    const param = useParams();
    const { topicId } = param;

    const { questions, isLoading, isError } = useGetQuestions(topicId as string);

    const answers = useSelector((state: RootState) => state.answer.answers)

    useEffect(() => {
        if (answers.length === questions.length) {
            dispatch(setCanSubmit(true))
        } else {
            dispatch(setCanSubmit(false))
        }
    }, [answers, questions, dispatch])


    if (isLoading) return <QuestionLoading />
    if (isError) return <div>error</div>
    return (
        <>
            {questions.map((question) => {
                return <Question key={question.id} question={question} />
            })}
        </>
    )
}

export default Questions