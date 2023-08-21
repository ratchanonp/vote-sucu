import { getTopics } from "@/utils/topics/topics";
import { SimpleGrid } from "@chakra-ui/react";
import { TopicCard } from "../TopicCard";

const topics = getTopics();

export default function TopicsGrid() {

    const data = topics();

    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} mt={5}>
            {data.map((topic, i) => <TopicCard key={i} topic={topic} />)}
        </SimpleGrid>
    )
}