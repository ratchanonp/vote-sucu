import { IQuestion } from "@/interfaces/topic.interface";
import { addAnswer } from "@/redux/features/answerSlice";
import { Stack, Text, useRadioGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import RadioCard from "../RadioCard";

interface Props {
  question: IQuestion
}

export function Question(props: Props) {

  const { question } = props;
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
    <Text fontWeight="semibold">{title}</Text>
    <Stack {...group} spacing={5}>
      {answers.map((answer) => {
        const radio = getRadioProps({ value: answer.id })
        return (
          <RadioCard key={answer.id} {...radio} >
            {answer.answer}
          </RadioCard>
        )
      }
      )}
    </Stack>
  </Stack>
  );
}
