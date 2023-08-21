import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IResponseAnswer {
    questionId: string;
    answerId: string;
}

interface IAnswerState {
    answers: IResponseAnswer[];
    canSubmit: boolean;
}

const initialState: IAnswerState = {
    answers: [],
    canSubmit: false
}

const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        addAnswer: (state, action: PayloadAction<IResponseAnswer>) => {
            if (state.answers.some((item) => item.questionId === action.payload.questionId)) {
                state.answers = state.answers.map((item) => {
                    if (item.questionId === action.payload.questionId) {
                        return action.payload;
                    }
                    return item;
                })
            } else {
                state.answers.push(action.payload);
            }
        },
        setCanSubmit: (state, action: PayloadAction<boolean>) => {
            state.canSubmit = action.payload;
        }
    }
})

export const { addAnswer, setCanSubmit } = answerSlice.actions;
export default answerSlice.reducer;