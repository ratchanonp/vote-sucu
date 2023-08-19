import { Button, Checkbox, Container, Flex, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from "react";
import SmoVidyaLogo from "../assets/white_smovidya_logo.png";
import Policy from "../components/Policy";
import VoteLottie from "../lottie/vote.json";

const IndexPage = () => {


    const [isAccepted, setIsAccepted] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex bgColor="primary">
            <Container h="100svh" maxW="container.xl" >
                <Stack my={20}>
                    <HStack spacing={5} mb={20}>
                        <img src={SmoVidyaLogo} alt="SmoVidya Logo" width={75} height={75} />
                        <Heading fontSize="3xl" color="white" fontWeight="medium">
                            สโมสรนิสิตคณะวิทยาศาสตร์
                        </Heading>
                    </HStack>
                    <Flex w="full" justifyContent="space-between">

                        <Stack ml={20}>
                            <Heading fontSize="3xl">
                                ระบบ
                            </Heading>
                            <Heading as="h1" fontSize="9xl" textShadow="7px 7px #FFF">
                                ประชามติ
                            </Heading>
                            <Heading as="h2" fontSize="5xl" >
                                สโมสรนิสิตคณะวิทยาศาสตร์
                            </Heading>

                            <Stack spacing={10}>
                                <Button
                                    variant="ghost"
                                    _hover={{
                                        background: "transparent",
                                    }}
                                    w="fit-content"
                                    p={0}
                                    onClick={onOpen}
                                >
                                    <Checkbox
                                        readOnly
                                        size="lg"
                                        colorScheme="blackAlpha"
                                        _checked={{ "& .chakra-checkbox__control": { background: "black" } }}
                                        borderColor="black" mt={10}
                                        isChecked={isAccepted}
                                    >
                                        ยอมรับนโยบายการจัดเก็บข้อมูลส่วนบุคคล
                                    </Checkbox>
                                </Button>

                                <Button size="lg" bgColor="black" colorScheme="blackAlpha" color="white" w="fit-content" isDisabled={!isAccepted} >เข้าสู่ระบบ ผ่าน Chula SSO</Button>
                            </Stack>
                        </Stack>
                        <Flex>
                            <Player
                                autoplay
                                loop
                                src={VoteLottie}
                                style={{ height: '500px', width: '500px' }}
                            >
                                ∂                            </Player>
                        </Flex>
                    </Flex>
                </Stack>
                <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
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
            </Container>
        </Flex>
    )
}

export default IndexPage