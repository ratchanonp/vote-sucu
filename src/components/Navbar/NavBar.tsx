import SmoVidyaLogo from "@/assets/white_smovidya_logo.png"
import { Button, Container, Flex, HStack } from "@chakra-ui/react"
import styles from './Navbar.module.css'

const NavBar = () => {

    const handleLogout = () => {
        window.location.href = `https://account.it.chula.ac.th/logout?service=${window.location.origin}`
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
