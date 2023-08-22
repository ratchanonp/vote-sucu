import { SimpleGrid } from "@chakra-ui/react"
import { TopicCardLoading } from "../TopicCard"

function TopicGridLoading() {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={5} mt={5}>
            {[...Array(3)].map((_, i) => <TopicCardLoading key={i} />)}
        </SimpleGrid>
    )
}

export default TopicGridLoading