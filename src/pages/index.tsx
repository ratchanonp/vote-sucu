import { Button, Link as ChakraLink, Container, Heading, Stack, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'

const IndexPage = () => {
    return (
        <Container height="100svh" maxW="container.xl" display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={5}>
                <Heading as="h1" size="4xl" textAlign="center">
                    ประชามติ
                </Heading>
                <Text fontSize="sm" textAlign="center">
                    เร็วๆนี้ทุกโรงภาพยนตร์
                </Text>
                <ChakraLink variant="solid" as={ReactRouterLink} to='https://account.it.chula.ac.th/html/login.html?service=https://vote-sucu.web.app/callback'>
                    <Button colorScheme="yellow" size="lg" w="full">
                        Login with Chula SSO
                    </Button>
                </ChakraLink>
            </Stack>
        </Container>
    )
}

export default IndexPage