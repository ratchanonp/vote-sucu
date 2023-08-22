import { IQuestion, ITopic } from "../interfaces/topic.interface";

type ITopicWithouId = Omit<ITopic, "id">;

const TOPIC: ITopicWithouId =
{
    title: "การมีส่วนร่วมของผู้นำเชียร์ คทากร และคัลเลอร์การ์ด",
    start: "2023-08-25T08:00:00+07:00",
    end: "2023-08-25T17:00:00.000+07:00",
    isPublished: true,
    participants: 0,
}


const QUESTIONS: IQuestion[] = [
    {
        id: "1",
        title: "คุณเห็นด้วยหรือไม่กับการมีส่วนร่วมของผู้นำเชียร์ในกิจกรรมที่ดำเนินการโดยสโมสรนิสิตคณะวิทยาศาสตร์",
        answers: [
            { id: "1", answer: "เห็นด้วย" },
            { id: "2", answer: "ไม่เห็นด้วย" },
            { id: "3", answer: "งดออกเสียง" },
        ]
    },
    {
        id: "2",
        title: "คุณเห็นด้วยหรือไม่กับการมีส่วนร่วมของคฑากรและคัลเลอร์การ์ดในกิจกรรมที่ดำเนินการโดยสโมสรนิสิตคณะวิทยาศาสตร์",
        answers: [
            { id: "1", answer: "เห็นด้วย" },
            { id: "2", answer: "ไม่เห็นด้วย" },
            { id: "3", answer: "งดออกเสียง" },
        ]

    }
];

export { QUESTIONS, TOPIC };

export default TOPIC;