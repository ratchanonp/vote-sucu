export interface ITopic {
    id: string;
    title: string;
    start: string;
    end: string;
    isPublished: boolean;
    participants: number;
    questions?: IQuestion[];
    documents: IDocument[];
}

export type ITopicWithouId = Omit<ITopic, "id">;

export interface IQuestion {
    id: string;
    title: string;
    answers: IAnswer[];
}

export interface IDocument {
    id: string;
    title: string;
    url: string;
}

export interface IAnswer {
    id: string;
    answer: string;
}