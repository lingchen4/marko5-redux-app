import { createSelector } from 'reselect';

const todo = state => state.todo.todos;
const todoSelector = createSelector(todo, val => val)

export default todoSelector;