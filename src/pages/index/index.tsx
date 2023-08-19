import { Button, Checkbox, Container, Flex, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from "react";
import SmoVidyaLogo from "../../assets/white_smovidya_logo.png";
import Policy from "../../components/Policy";
import VoteLottie from "../../lottie/vote.json";
import styles from './index.module.css';


const IndexPage = () => {


    const [isAccepted, setIsAccepted] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Flex bgColor="primary">
            <Container minH="100svh" maxW="container.xl" >
                <Stack my={{ base: 5, lg: 20 }}>
                    <HStack spacing={5} mb={{ base: 5, lg: 20 }}>
                        <img src={SmoVidyaLogo} alt="SmoVidya Logo" className={styles.logo} />
                    </HStack>
                    <Flex
                        flexDirection={{ base: "column-reverse", lg: "row" }}
                        w="full"
                        justifyContent="space-between"
                        gap={{ base: 10, lg: 20 }}
                    >
                        <Stack ml={{ base: 0, lg: 20 }} textAlign={{ base: "center", lg: "left" }} spacing={0}>
                            <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
                                ระบบ
                            </Heading>
                            <Heading as="h1" fontSize={{ base: "7xl", lg: "9xl" }} textShadow="7px 7px #FFF">
                                ประชามติ
                            </Heading>
                            <Heading as="h2" fontSize={{ base: "2xl", lg: "4xl" }} >
                                สโมสรนิสิตคณะวิทยาศาสตร์
                            </Heading>

                            <Stack
                                spacing={10}
                                alignItems={{
                                    base: "center",
                                    lg: "flex-start",
                                }}
                                display="flex"
                            >
                                <Button
                                    variant="ghost"
                                    _hover={{
                                        background: "transparent",
                                    }}
                                    w="fit-content"
                                    h="fit-content"
                                    p={0}
                                    onClick={onOpen}
                                >
                                    <Checkbox
                                        readOnly
                                        size={{ base: "md", lg: "lg" }}
                                        colorScheme="blackAlpha"
                                        _checked={{ "& .chakra-checkbox__control": { background: "black" } }}
                                        borderColor="black" mt={10}
                                        isChecked={isAccepted}
                                    >
                                        ยอมรับนโยบายการจัดเก็บข้อมูลส่วนบุคคล
                                    </Checkbox>
                                </Button>

                                <Button
                                    size="lg"
                                    bgColor="black"
                                    colorScheme="blackAlpha"
                                    color="white"
                                    w="fit-content"
                                    isDisabled={!isAccepted}
                                    onClick={
                                        () => window.location.href = "https://account.it.chula.ac.th/html/login.html?service=https://vote-sucu.web.app/callback"
                                    }
                                    _focus={{ backgroundColor: "black" }}
                                    _hover={{ backgroundColor: "black" }}
                                >
                                    เข้าสู่ระบบ ผ่าน Chula SSO
                                </Button>

                            </Stack>
                        </Stack>
                        <Flex justifyContent="center">
                            <Player
                                autoplay
                                loop
                                src={VoteLottie}
                                style={{
                                    height: "auto",
                                    width: "100%",
                                }}
                            />
                        </Flex>
                    </Flex>
                </Stack >
                <Modal isOpen={isOpen} onClose={onClose} size={{
                    base: "full",
                    lg: "xl"
                }} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>นโยบายการจัดเก็บข้อมูลส่วนบุคคล</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Policy />
                        </ModalBody>

                        <ModalFooter>
                            <Button bgColor='primary' colorScheme="yellow" mr={3} onClick={
                                () => {
                                    setIsAccepted(true)
                                    onClose()
                                }
                            }>
                                ยอมรับ
                            </Button>
                            <Button variant='ghost'
                                onClick={() => {
                                    setIsAccepted(false)
                                    onClose()
                                }}>ไม่ยอมรับ</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container >
        </Flex >
    )
}

export default IndexPage