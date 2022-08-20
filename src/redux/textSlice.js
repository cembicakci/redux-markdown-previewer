import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: "text",
    initialState: {
        markdownText: ``,
    },
    reducers: {
        setMarkDownText: (state, action) => {
            state.markdownText = action.payload;
        }
    }
})

export const { setMarkDownText } = textSlice.actions
export default textSlice.reducer