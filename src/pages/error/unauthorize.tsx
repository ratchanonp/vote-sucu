import ErrorLottie from "@/lottie/error.json"
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { Player } from "@lottiefiles/react-lottie-player"

function Unauthorize() {

    const handleLogout = () => {
        window.location.href = `https://account.it.chula.ac.th/logout?service=${window.location.origin}`
    }

    return (
        <Container h="100svh" display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Player
                autoplay
                loop
                src={ErrorLottie}
                style={{
                    height: "auto",
                    width: "100%",
                }}
            />

            <Stack spacing={5}>
                <Stack textAlign="center">
                    <Heading>ดูเหมือนว่าคุณไม่มีสิทธิในการทำประชามติในครั้งนี้นะ</Heading>
                    <Text>Please contact: it.sucu@365.sc.chula.ac.th</Text>
                </Stack>
                <Button bgColor="black" color="white" onClick={handleLogout}>
                    กลับสู่หน้าหลัก
                </Button>
            </Stack>
        </Container>
    )
}

export default Unauthorize