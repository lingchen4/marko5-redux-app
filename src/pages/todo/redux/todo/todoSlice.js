import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nextTodoId++,
        text: action.payload,
        completed: false
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      );
    },

    markAllCompleted: state => {
      state.todos = state.todos.map(todo => ({ ...todo, completed: true }));
    },
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo, markAllCompleted } = todoSlice.actions;

export default todoSlice.reducer;
