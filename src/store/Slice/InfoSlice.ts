import {createSlice, Draft} from "@reduxjs/toolkit";

export type result = {
    id: string,
    text: string
}

type infoState = {
    selectedImage: File | null,
    result: result | null,
    resultData: result[] | null
    language: string | null,
    statusText: string | null,
}

const initialState: infoState = {
    selectedImage: null,
    result: null,
    resultData: [],
    language: null,
    statusText: null,
}

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setFile: (state:Draft<infoState>, action) => {
            state.selectedImage = action.payload
        },
        setResultText: (state:Draft<infoState>, action) => {
            state.result = action.payload
            // @ts-ignore
            state.resultData = [...state.resultData, action.payload]
        },
        clearInfo: (state: Draft<infoState>) => {
            state.result = null;
            state.selectedImage = null;
        },
        setLanguage: (state:Draft<infoState>, action) => {
            state.language = action.payload
        },
        setStatus: (state:Draft<infoState>, action) => {
            state.statusText = action.payload
        }
    }
})

export const {setFile,setResultText, clearInfo, setLanguage, setStatus} = infoSlice.actions;
export default infoSlice.reducer
