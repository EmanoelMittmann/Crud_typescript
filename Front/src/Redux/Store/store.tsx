import { configureStore } from "@reduxjs/toolkit";
import { StateClient } from "../Slice/customers";
import { StateModal } from "../Slice/Task";

export const store = configureStore({
    reducer:{
        Modal:StateModal.reducer,
        Client: StateClient.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>