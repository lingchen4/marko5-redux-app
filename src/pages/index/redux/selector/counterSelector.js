import { createSelector } from 'reselect';

const count = state => state.counter.value;
const counterSelector = createSelector(count, val => val)

export default counterSelector;