import { ITopic } from "../interfaces/topic.interface";

const TOPICS: ITopic[] = [
    {
        id: "1",
        title: "การมีอยู่ของสามองค์กร ได้แก่ ผู้นำเชียร์ คฑากร และ คัลเลอร์การ์ด",
        description: "การมีอยู่ของสามองค์กร ได้แก่ ผู้นำเชียร์ คฑากร และ คัลเลอร์การ์ด",
        start: "2021-10-01T00:00:00.000Z",
        end: "2021-10-31T00:00:00.000Z",
        pause: false,
        questions: [
            {
                id: "1",
                question: "ท่านเห็นด้วยหรือไม่กับการมีอยู่ของผู้นำเชียร์",
                answers: [
                    { id: "1", answer: "เห็นด้วย" },
                    { id: "2", answer: "ไม่เห็นด้วย" },
                    { id: "3", answer: "งดออกเสียง" }
                ]
            },
            {
                id: "2",
                question: "ท่านเห็นด้วยหรือไม่กับการมีอยู่ของผู้นำเชียร์",
                answers: [
                    { id: "1", answer: "เห็นด้วย" },
                    { id: "2", answer: "ไม่เห็นด้วย" },
                    { id: "3", answer: "งดออกเสียง" }
                ]
            },
            {
                id: "3",
                question: "ท่านเห็นด้วยหรือไม่กับการมีอยู่ของผู้นำเชียร์",
                answers: [
                    { id: "1", answer: "เห็นด้วย" },
                    { id: "2", answer: "ไม่เห็นด้วย" },
                    { id: "3", answer: "งดออกเสียง" }
                ]
            }
        ],
    }
]




export default TOPICS;