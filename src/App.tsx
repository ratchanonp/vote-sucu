import { Container, Heading, Stack, Text } from "@chakra-ui/react"

function App() {

  return (
    <Container height="100svh" maxW="container.xl" display="flex" justifyContent="center" alignItems="center">
      <Stack>
        <Heading as="h1" size="4xl" textAlign="center">
          ประชามติ
        </Heading>
        <Text fontSize="sm" textAlign="center">
          เร็วๆนี้ทุกโรงภาพยนตร์
        </Text>
      </Stack>
    </Container>
  )
}

export default App
