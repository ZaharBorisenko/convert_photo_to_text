import {createSlice} from "@reduxjs/toolkit";

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
    reducers: {}
})
