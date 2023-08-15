import { useSearchParams } from "react-router-dom";

const CallBack = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchParams] = useSearchParams();

    return (
        <pre>
            {JSON.stringify(searchParams, null, 2)}
        </pre>
    )
}

export default CallBack