import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
        color: localStorage.getItem("color"),
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: ({text, color}) => {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        color
                    }
                }
            }
        },
        changeColor: (state, action) => {
            state.color = action.payload;
        },
        filtered: (state, action) => {
            state.filtered = action.payload
        }
    }
})
export const selectNotes = (state) => state.notes.items;
export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
