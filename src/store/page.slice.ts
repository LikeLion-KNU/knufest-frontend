import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPageState {
    currentPage: number;
    page: number;
    perPage: number;
    maxPage: number;
}

const initialState: IPageState = {
    currentPage: 1,
    page: 1,
    perPage: 5,
    maxPage: 0,
};

export const pageSlice = createSlice({
    name: "knufest/page",
    initialState,

    reducers: {
        setMaxPage: (state, action: PayloadAction<number>) => {
            state.maxPage = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        nextPage: (state) => {
            const newStartPage = state.page + state.perPage;
            if (newStartPage <= state.maxPage) {
                state.page = newStartPage;
                state.currentPage = newStartPage;
            }
        },
        prevPage: (state) => {
            const newStartPage = state.page - state.perPage;
            if (newStartPage >= 1) {
                state.page = newStartPage;
                state.currentPage = newStartPage;
            }
        },
    },
});

export const pageActions = pageSlice.actions;
