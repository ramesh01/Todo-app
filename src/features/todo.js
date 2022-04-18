import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {todoList: []},
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        editTodo: (state, action) => {
            state.todoList = [];
            state.todoList.push(action.payload);
        }
    }
});

export const { addTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;