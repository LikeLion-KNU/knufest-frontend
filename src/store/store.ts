import { pageSlice } from "./page.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        page: pageSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
