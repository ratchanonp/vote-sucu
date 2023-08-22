import { Badge, Button, Flex, Heading, Icon, Skeleton, Stack, Text } from "@chakra-ui/react"
import { AiFillCalendar } from "react-icons/ai"
import { MdOutlineHowToVote } from "react-icons/md"

export function TopicCardLoading() {
    return (
        <Flex
            direction="column"
            gap={10}
            borderRadius="lg"
            bgColor="white"
            p={5}
            border="2px solid #000"
            h="fit-content"
            bg="gray.50"
            boxShadow={"10px 10px 0px 0px #000000"}
        >
            <Stack>
                <Skeleton w="fit-content">
                    <Badge w="fit-content" alignItems="center" display="flex" gap={1} fontWeight="medium" color="gray.500"><Icon as={AiFillCalendar} />25 สิงหาคม 2566</Badge>
                </Skeleton>
                <Skeleton>
                    <Heading size="md">การมีส่วนร่วมของผู้นำเชียร์ คทากร และคัลเลอร์การ์ด</Heading>
                </Skeleton>

                <Skeleton w="fit-content">
                    <Text fontSize="xs">ลงความเห็นแล้ว 0 คน</Text>
                </Skeleton>
            </Stack>

            <Skeleton>
                <Button border="2px solid #000" bgColor="primary.500" color="black">
                    <Icon as={MdOutlineHowToVote} mr={1} />
                    ลงความเห็น
                </Button>
            </Skeleton>
        </Flex >
    )
}