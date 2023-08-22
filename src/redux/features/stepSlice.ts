import { createSlice } from "@reduxjs/toolkit";

interface IStepState {
    step: number;
    totalStep: number;
}

const initialState: IStepState = {
    step: 1,
    totalStep: 0,
}

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.step < state.totalStep) state.step = state.step + 1;
        },
        prevStep: (state) => {
            if (state.step > 1) state.step = state.step - 1;
        },
        setTotalStep: (state, action) => {
            state.totalStep = action.payload;
        }
    }
})

export const { nextStep, prevStep, setTotalStep } = stepSlice.actions;
export default stepSlice.reducer;