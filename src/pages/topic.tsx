import { Button, Container, Flex, HStack, Heading, Icon, Progress, Stack, Text, useRadioGroup } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import RadioCard from "../components/RadioCard";

const TopicPage = () => {

    const param = useParams();
    console.log(param.topicId);


    const [step, setStep] = useState(0);
    const totalStep = 3;
    const stepValue = useMemo(() => { return 100 / totalStep * step }, [step]);

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: undefined,
        onChange: console.log,
    })

    const group = getRootProps()
    const options = ["เห็นด้วย", "ไม่เห็นด้วย", "งดออกเสียง"]

    return (
        <Flex h="100svh" w="100svw">
            <Container maxW="container.sm" mt={20}>
                <Stack spacing={5}>
                    <HStack justifyContent="space-between">
                        <Icon as={FaChevronLeft} />
                        <Heading as="h1" size="md" fontWeight="medium" textAlign="center" maxW="96">
                            การมีอยู่ของผู้นำเชียร์ คฑากร และ คัลเลอร์การ์ด ในคณะวิทยาศาสตร์
                        </Heading>
                        <Text>
                            {step + 1}/{totalStep}
                        </Text>
                    </HStack>
                    <Progress value={stepValue} size="sm" colorScheme="yellow" />
                    <Stack spacing={5} p={10} border="1px solid" borderColor="gray.200" borderRadius="xl">
                        <Text fontSize="xl" fontWeight="semibold">
                            คุณเคยเข้าร่วมกิจกรรมเชียร์ คฑากร และ คัลเลอร์การ์ด หรือไม่
                        </Text>
                        <HStack {...group}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value })
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                )
                            })}
                        </HStack>
                    </Stack>
                    <HStack w="full">
                        <Button w="full" variant="ghost" onClick={() => setStep(step - 1)} isDisabled={step === 1}>ก่อนหน้า</Button>
                        <Button w="full" variant="solid" colorScheme="yellow" onClick={() => setStep(step + 1)}>{step === totalStep - 1 ? "ส่งคำตอบ" : "ถัดไป"}</Button>
                    </HStack>
                </Stack>
            </Container>
        </Flex>
    )
}

export default TopicPage