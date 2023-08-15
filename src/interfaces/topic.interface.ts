export interface ITopic {
    id: string;
    title: string;
    description: string;
    start: string;
    end: string;
    pause: boolean;
    questions: IQuestion[];
}

export interface IQuestion {
    id: string;
    question: string;
    answers: IAnswer[];
}

export interface IAnswer {
    id: string;
    answer: string;
}