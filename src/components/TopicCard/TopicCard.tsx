import useHaveVoted from "@/hooks/useGetHavesigned";
import { ITopic } from "@/interfaces/topic.interface";
import { onOpen } from "@/redux/features/modalSlice";
import { RootState } from "@/redux/store";
import { Badge, Button, Flex, HStack, Heading, Icon, Skeleton, Stack, Text } from "@chakra-ui/react";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import VoteAgreementModal from "../Modal/VoteAgreementModal";

interface Props {
  topic: ITopic;
}

export function TopicCard(props: Props) {

  const formatTimeConfig: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
  const formatDateConfig: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };

  const { topic } = props;
  const { title, participants, start, end } = topic;

  const formattedStartDate = new Date(start).toLocaleDateString("th-TH", formatDateConfig);
  const formattedStartTime = new Date(start).toLocaleTimeString("th-TH", formatTimeConfig);
  const formattedEndTime = new Date(end).toLocaleTimeString("th-TH", formatTimeConfig);



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

      <VoteButton topic={topic} />
    </Flex>
  );
}


function VoteButton({ topic }: { topic: ITopic }) {

  const dispatch = useDispatch();

  const ouid = useSelector((state: RootState) => state.auth.user?.ouid) as string;
  const { start, end, id } = topic;

  const { havesigned, loading } = useHaveVoted(id, ouid)
  const canVote = new Date(start) < new Date() && new Date() < new Date(end) || import.meta.env.MODE === "development";

  const buttonText = () => {
    if (!havesigned) {
      if (canVote) {
        return "ลงความเห็น"
      } else {
        return "ไม่อยู่ในช่วงเวลาลงความเห็น"
      }
    } else {
      return "ลงความเห็นแล้ว"
    }
  }


  return (
    <Skeleton isLoaded={!loading} w="100%" display="flex">
      <Button
        w="100%"
        border="2px solid #000" bgColor="primary.500" _hover={{
          bottom: "3px",
          right: "3px",
          boxShadow: "3px 3px 0 0 #000000"
        }} boxShadow="0 0 0 0 #fff" color="black" isDisabled={havesigned || !canVote} onClick={() => dispatch(onOpen(<VoteAgreementModal topicId={id} />))}>
        <Icon as={MdOutlineHowToVote} mr={1} />
        {buttonText()}
      </Button>
    </Skeleton>
  );
}
