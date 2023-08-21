import { ModalProps } from "@chakra-ui/react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: IModalState = {
    isOpen: false,
    size: "full",
    children: null
}

interface IModalState {
    isOpen: boolean;
    size: ModalProps["size"];
    children: React.ReactElement | null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onOpen: (state, action: PayloadAction<React.ReactElement>) => {
            state.isOpen = true;
            state.children = action.payload;
        },
        onClose: (state) => {
            state.isOpen = false;
            state.children = null;
        },
        setSize: (state, action: PayloadAction<ModalProps["size"]>) => {
            state.size = action.payload;
        }
    }
});

export const { onOpen, onClose, setSize } = modalSlice.actions;
export default modalSlice.reducer;