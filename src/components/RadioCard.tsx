import { Box, RadioProps, useRadio } from "@chakra-ui/react"

const RadioCard = (props: RadioProps) => {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                border="2px solid black"
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'primary.500',
                    color: 'black',
                    borderColor: 'black',
                    border: "2px solid"
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default RadioCard