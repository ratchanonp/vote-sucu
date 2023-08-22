import { QUESTIONS } from "@/MOCK/TOPICS";
import { addAnswer } from "@/redux/features/answerSlice";
import { Skeleton, SkeletonText, Stack, Text, useRadioGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import RadioCard from "../RadioCard";


export function QuestionLoading() {

    const question = QUESTIONS[0];
    const { id, title, answers } = question;

    const dispatch = useDispatch();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: undefined,
        onChange: (value) => {
            dispatch(addAnswer({ questionId: id, answerId: value }));
        }
    })

    const group = getRootProps()

    return (<Stack spacing={5} p={5} border="2px solid" borderColor="black" borderRadius="xl" bg="white" boxShadow={"10px 10px 0px 0px #000000"}>
        <SkeletonText skeletonHeight={5}>
            <Text fontWeight="semibold">{title}</Text>
        </SkeletonText>
        <Stack {...group} spacing={5}>
            {answers.map((answer) => {
                const radio = getRadioProps({ value: answer.id })
                return (
                    <Skeleton>
                        <RadioCard key={answer.id} {...radio} >
                            {answer.answer}
                        </RadioCard>
                    </Skeleton>
                )
            }
            )}
        </Stack>
    </Stack>
    );
}
