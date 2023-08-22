import { IResponseAnswer } from "@/redux/features/answerSlice";

export interface IResponse {
    topicId: string;
    responses: IResponseAnswer[];
}

