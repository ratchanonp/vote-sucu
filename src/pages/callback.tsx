import { functions } from "@/firebase/firebase";
import { ChulaSSOData } from "@/interfaces/cusso.interface";
import VoteLottie from "@/lottie/vote.json";
import { login } from "@/redux/features/authSlice";
import { Flex, Heading } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { httpsCallable } from "firebase/functions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const CallBack = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchParams] = useSearchParams();
    const ticketId = searchParams.get("ticket");


    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        const serviceValidation = httpsCallable(functions, "serviceValidation");

        if (ticketId) {

            localStorage.removeItem("ticket");
            localStorage.setItem("ticket", ticketId);

            serviceValidation({ ticket: ticketId })
                .then((res) => {
                    const { ouid } = res.data as ChulaSSOData;

                    const isScienceStudent = ouid.endsWith("23");

                    if (!isScienceStudent) {
                        navigate("/unauthorize"); return;
                    }


                    dispatch(login(res.data as ChulaSSOData))
                    localStorage.removeItem("user");
                    localStorage.setItem("user", JSON.stringify(res.data));
                    navigate("/topics")
                })
                .catch((err) => {
                    console.log(err);
                    navigate("/error")
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ticketId]);

    return (
        <Flex justifyContent="center" h="100svh" alignItems="center" flexDirection="column">
            <Player
                autoplay
                loop
                src={VoteLottie}
                style={{
                    height: "100%",
                    width: "100%",
                }}
            />
            <Heading mt={10} size="md" fontWeight="medium">
                กำลังโหลดข้อมูลจาก Chula SSO
            </Heading>
        </Flex>
    )
}

export default CallBack