import TOPIC, { QUESTIONS } from "@/MOCK/TOPICS";
import { addQuestions } from "@/utils/question/question";
import { addTopic } from "@/utils/topics/topics";
import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { useState } from "react";

function MockImportPage() {

    const [topicId, setTopicId] = useState<string>("")

    const handleAddTopic = async () => setTopicId(await addTopic(TOPIC))
    const handleAppQuestions = async () => await addQuestions(QUESTIONS, topicId);

    return (
        <Container my={5}>
            <Stack>

                <Heading>Mock Import Page</Heading>
                <Button onClick={handleAddTopic}>
                    Import Topic
                </Button>
                <pre>
                    Success : {topicId}
                </pre>

                <Button onClick={handleAppQuestions}>Import Question</Button>
            </Stack>
        </Container>
    )
}

export default MockImportPage