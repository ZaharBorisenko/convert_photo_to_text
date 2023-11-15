import {createSlice, Draft} from "@reduxjs/toolkit";

type infoState = {
    selectedImage: File | null,
    resultText: string | null,
    language: string | null,
}

const initialState: infoState = {
    selectedImage: null,
    resultText: null,
    language: null,
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
        },
        setLanguage: (state:Draft<infoState>, action) => {
            state.language = action.payload
        },
    }
})

export const {setFile,setResultText, clearInfo, setLanguage} = infoSlice.actions;
export default infoSlice.reducer
