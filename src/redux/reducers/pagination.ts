
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pagination = createSlice({
    name: 'pagination',
    initialState: {
        currentPage: 1
    },
    reducers: {
        shareCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
            state.currentPage = action.payload.currentPage
        }
    }
})

export { pagination }