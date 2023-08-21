import { haveSign } from "@/utils/sign/sign";
import { useEffect, useState } from "react";

const useHaveVoted = (topicId: string, ouid: string) => {
    const [havesigned, setHavesigned] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchHavesigned = async () => {
            try {
                const havesigned = await haveSign(topicId, ouid);
                setHavesigned(havesigned);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchHavesigned();
    }, []);

    return { havesigned, loading, error };
};

export default useHaveVoted;