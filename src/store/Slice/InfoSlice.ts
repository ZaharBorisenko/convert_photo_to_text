import {createSlice, Draft} from "@reduxjs/toolkit";

type infoState = {
    selectedImage: File | null,
    resultText: string | null,
}

const initialState: infoState = {
    selectedImage: null,
    resultText: null,
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setFile: (state:Draft<infoState>, action) => {
            state.selectedImage = action.payload
        },
        setResultText: (state:Draft<infoState>, action) => {
            state.resultText = action.payload
        },
        clearInfo: (state: Draft<infoState>) => {
            state.resultText = null;
            state.selectedImage = null;
        }
    }
})

export const {setFile,setResultText, clearInfo} = infoSlice.actions;
export default infoSlice.reducer
