import addTask from './addTask';
import IncrementDecrement, { Increment } from './IncrementDecrement';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    Create : addTask,
    Counter : IncrementDecrement
});

export default allReducers;