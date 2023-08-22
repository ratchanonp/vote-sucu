import { onClose } from "@/redux/features/modalSlice"
import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import VotePolicy from "../Policy/VotePolicy"

interface Props {
    topicId: string
}

function VoteAgreementModal(props: Props) {

    const { topicId } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>ข้อบังคับประชามติ</ModalHeader>
                <ModalCloseButton />
                <ModalBody display="flex" minH="80vh">
                    <VotePolicy />
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme='primary'
                        w="full"
                        border="2px solid" borderColor="black"
                        color="black"
                        onClick={() => {
                            navigate(`topics/${topicId}`)
                            dispatch(onClose())
                        }}>
                        ยอมรับ
                    </Button>
                </ModalFooter>
            </ModalContent >
        </>
    )
}

export default VoteAgreementModal