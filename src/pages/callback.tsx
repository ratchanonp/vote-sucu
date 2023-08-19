import { httpsCallable } from "firebase/functions";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { functions } from "../firebase/firebase";
import { ChulaSSOData } from "../interfaces/cusso.interface";

const CallBack = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchParams] = useSearchParams();
    const ticketId = searchParams.get("ticket");

    const [response, setResponse] = useState<ChulaSSOData>();
    const serviceValidation = httpsCallable(functions, "serviceValidation");

    useEffect(() => {
        if (ticketId) {
            serviceValidation({ ticket: ticketId })
                .then((res) => {
                    console.log(res);
                    setResponse(res.data as ChulaSSOData);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [serviceValidation, ticketId]);

    return (
        <pre>
            {JSON.stringify(ticketId, null, 2)}
            {JSON.stringify(response, null, 2)}
        </pre>
    )
}

export default CallBack