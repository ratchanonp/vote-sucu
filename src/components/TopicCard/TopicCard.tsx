import { ITopic } from "@/interfaces/topic.interface";
import { onOpen } from "@/redux/features/modalSlice";
import { Badge, Button, Flex, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch } from "react-redux";
import VoteAgreementModal from "../Modal/VoteAgreementModal";

interface Props {
  topic: ITopic;
}

export function TopicCard(props: Props) {

  const dispatch = useDispatch();

  const formatTimeConfig: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
  const formatDateConfig: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };

  const { topic } = props;
  const { title, participants, start, end, id } = topic;

  const formattedStartDate = new Date(start).toLocaleDateString("th-TH", formatDateConfig);
  const formattedStartTime = new Date(start).toLocaleTimeString("th-TH", formatTimeConfig);
  const formattedEndTime = new Date(end).toLocaleTimeString("th-TH", formatTimeConfig);

  const canVote = new Date(start) < new Date() && new Date() < new Date(end) || true;

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
        <HStack>
          <Badge w="fit-content" alignItems="center" display="flex" gap={1} fontWeight="medium" color="gray.500"><Icon as={AiFillCalendar} />{formattedStartDate}</Badge>
          <Badge w="fit-content" alignItems="center" display="flex" gap={1} fontWeight="medium" color="gray.500"><Icon as={AiFillClockCircle} />{formattedStartTime} - {formattedEndTime}</Badge>
        </HStack>
        <Heading size="md">{title}</Heading>

        <Text fontSize="xs">ลงความเห็นแล้ว {participants} คน</Text>
      </Stack>

      <Button border="2px solid #000" bgColor="primary.500" _hover={{ bottom: "3px", right: "3px", boxShadow: "3px 3px 0 0 #000000" }} boxShadow="0 0 0 0 #fff" color="black" isDisabled={!canVote} onClick={() => dispatch(onOpen(<VoteAgreementModal topicId={id} />))}>
        <Icon as={MdOutlineHowToVote} mr={1} />
        {canVote ? "ลงคะแนน" : "ไม่อยู่ในช่วงลงคะแนน"}
      </Button>
    </Flex>
  );
}
