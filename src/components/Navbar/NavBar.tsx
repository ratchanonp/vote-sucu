
import { Button, Container, Flex, HStack } from "@chakra-ui/react"
import SmoVidyaLogo from "../../assets/white_smovidya_logo.png"
import styles from './NavBar.module.css'

const NavBar = () => {

    const handleLogout = () => {
        window.location.href = "https://account.it.chula.ac.th/logout?service=https://vote-sucu.web.app/"
    }

    return (
        <Flex bg="black" color="white">
            <Container maxW="container.md" py={3} >
                <HStack justifyContent="space-between" alignItems="center">
                    <img src={SmoVidyaLogo} alt="SmoVidya Logo" className={styles.logo} />

                    <Button size="sm" onClick={handleLogout}>ออกจากระบบ</Button>
                </HStack>
            </Container>
        </Flex>
    )
}

export default NavBar
