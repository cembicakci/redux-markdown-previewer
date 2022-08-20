import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: "text",
    initialState: {
        helpItems: `
Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
* apples
* oranges
* pears
Numbered list:
1. apples
2. oranges
3. pears
The rain---not the reign---in
Spain.
*[Herman Fassett](https://freecodecamp.com/hermanfassett)*
         `,
        markdownText: `this is user help`,
        questionBtn: false
    },
    reducers: {
        setMarkDownText: (state, action) => {
            state.markdownText = action.payload;
        },
        setQuestionBtn: (state) => {
            state.questionBtn = !state.questionBtn
        }
    }
})

export const { setMarkDownText, setQuestionBtn } = textSlice.actions
export default textSlice.reducer