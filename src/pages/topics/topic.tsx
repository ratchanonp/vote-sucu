import ConfirmVoteModal from "@/components/Modal/ConfirmVote";
import NavBar from "@/components/Navbar/NavBar";
import Questions from "@/components/Questions/Questions";
import useHaveVoted from "@/hooks/useGetHavesigned";
import { useGetTopic } from "@/hooks/useGetTopic";
import { onOpen, setSize } from "@/redux/features/modalSlice";
import { RootState } from "@/redux/store";
import { Button, Container, Flex, Heading, Skeleton, Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";


const TopicPage = () => {

    const param = useParams();
    const { topicId } = param;

    const dispatch = useDispatch();
    const canSubmit = useSelector((state: RootState) => state.answer.canSubmit)
    const ouid = useSelector((state: RootState) => state.auth.user?.ouid) as string;

    const { havesigned } = useHaveVoted(topicId as string, ouid)


    if (topicId === undefined) return <Navigate to="/topics" />
    if (havesigned) return <Navigate to="/topics" />
    return (
        <>
            <Flex flexDirection="column" minH="100svh" bgColor="primary.500">
                <NavBar />
                <Container maxW="container.sm" mt={10}>
                    <Stack spacing={5} pb={5} >
                        <TopicHeader />
                        <Suspense>
                            <Questions />
                        </Suspense>
                        <Button
                            w="full"
                            variant="solid"
                            bgColor="white"
                            border="2px solid black"
                            boxShadow={"10px 10px 0px 0px #000000"}
                            _hover={{ bgColor: "primary.500" }}
                            onClick={() => {
                                dispatch(setSize("lg"))
                                dispatch(onOpen(<ConfirmVoteModal topicId={topicId} />));
                            }}
                            isDisabled={!canSubmit}
                        >
                            ส่งคำตอบ
                        </Button>
                    </Stack>
                </Container>
            </Flex >
        </>
    )
}


function TopicHeader() {

    const param = useParams();
    const { topicId } = param;
    const { topic, isLoading } = useGetTopic(topicId as string);

    return (
        <Stack textAlign="center" justifyContent="center" alignItems="center">
            <Heading size="xs" fontWeight="medium" bg="black" color="white" w="fit-content" px={3} py={1} borderRadius="full">
                หัวข้อ
            </Heading>
            {isLoading ? <Skeleton bgColor="white" height="25px" w="full" /> : <Heading size="lg" >{topic?.title}</Heading>}
        </Stack >
    );
}
export default TopicPage