import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CallBack = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchParams] = useSearchParams();
    const ticketId = searchParams.get("ticket");

    useEffect(() => {
        const getData = async (ticketId: string) => {
            const headers = new Headers();
            headers.append("DeeAppId", "app.web.vote-sucu")
            headers.append("DeeAppSecret", "05fa61aa574560830e5f460b33c55c377953d4142c2d39185b3f60c23d916dba45405e61fdc5b8a48338128e276aa0b9a4d5f1aaabb6274e0299dd8a42a9275c")
            headers.append("DeeTicket", ticketId)

            const res = await fetch("https://account.it.chula.ac.th/serviceValidation", {
                headers,
            });

            const data = await res.json();
            console.log(data);
        }

        if (ticketId) {
            getData(ticketId);
        }
    }, [ticketId]);

    return (
        <pre>
            {JSON.stringify(ticketId, null, 2)}
            { }
        </pre>
    )
}

export default CallBack