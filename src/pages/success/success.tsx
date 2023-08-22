import VoteLottie from "@/lottie/vote.json";
import { Button, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const VoteSuccessPage = () => {

    const navigate = useNavigate()

    return (
        <Flex w="100svw" h="100svh" alignItems="center" justifyContent="center" bgColor="primary.500">
            <Container>

                <Flex bgColor="white" border="2px solid #000" p={5} borderRadius="xl" flexDirection="column" alignItems="center" textAlign="center" boxShadow={"10px 10px 0px 0px #000000"} >
                    <Player
                        autoplay
                        loop
                        src={VoteLottie}
                        style={{
                            height: "auto",
                            width: "100%",
                        }}
                    />
                    <Heading mt={5}>ลงความเห็นเรียบร้อย</Heading>

                    <Text mt={5}>สโมสรนิสิตคณะวิทยาศาสตร์ <br /> ขอขอบคุณที่ร่วมเป็นส่วนหนึ่งในการลงความคิดเห็นประชามติครั้งนี้</Text>

                    <Button colorScheme="secondary" mt={5} onClick={() => navigate("/topics")}>
                        <Icon as={AiOutlineHome} mr={2} /> กลับสู่หน้าหลัก
                    </Button>
                </Flex>
            </Container >
        </Flex >
    )
}

export default VoteSuccessPage