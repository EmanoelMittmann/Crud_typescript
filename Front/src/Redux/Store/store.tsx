import { configureStore } from "@reduxjs/toolkit";
import { StateModal } from "../Slice";

export const store = configureStore({
    reducer:{
        Modal:StateModal.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>