import { IResponse } from "@/interfaces/response.interface"
import { setCanSubmit } from "@/redux/features/answerSlice"
import { onClose } from "@/redux/features/modalSlice"
import { RootState } from "@/redux/store"
import { postResponse } from "@/utils/reponse/resonse"
import { doSign } from "@/utils/sign/sign"
import { Button, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

interface Props {
    topicId: string
}

function ConfirmVoteModal(props: Props) {

    const { topicId } = props;

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const ouid = useSelector((state: RootState) => state.auth.user?.ouid)
    const answers = useSelector((state: RootState) => state.answer.answers)

    const handleSubmit = async () => {

        if (topicId === undefined) throw new Error("topicId is undefined")
        if (ouid === undefined) throw new Error("ouid is undefined")

        const payload: IResponse = {
            topicId: topicId,
            responses: answers
        }

        console.log(payload)

        const signId = await doSign(topicId, ouid)
        const responseId = await postResponse(payload)

        console.log(signId)
        console.log(responseId)

        navigate(`/success`)
        dispatch(onClose())
        dispatch(setCanSubmit(false))
    }

    return (
        <>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>ยืนยันการลงคะแนน</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        คุณต้องการยืนยันการลงความเห็นใช่หรือไม่
                        หลังจากยืนยันแล้วจะไม่สามารถแก้ไขความเห็นได้อีก
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme='primary'
                        w="full"
                        mr={2}
                        border="2px solid" borderColor="black"
                        color="black"
                        onClick={handleSubmit}>
                        ยืนยัน
                    </Button>
                    <Button w="full">
                        ยกเลิก
                    </Button>
                </ModalFooter>
            </ModalContent >
        </>
    )
}

export default ConfirmVoteModal