export interface ITopic {
    id: string;
    title: string;
    start: string;
    end: string;
    isPublished: boolean;
    participants: number;
    questions?: IQuestion[];
}

export type ITopicWithouId = Omit<ITopic, "id">;

export interface IQuestion {
    id: string;
    title: string;
    answers: IAnswer[];
}

export interface IAnswer {
    id: string;
    answer: string;
}