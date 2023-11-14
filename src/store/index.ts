import {configureStore} from "@reduxjs/toolkit";
import infoSlice from "store/Slice/InfoSlice.ts";

const store = configureStore({
    reducer : {
        info: infoSlice,
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
