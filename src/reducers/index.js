import addTask from './addTask';
import IncrementDecrement from './IncrementDecrement';
import {combineReducers } from 'redux';


const allReducers = combineReducers({
    counter : IncrementDecrement,
    create : addTask 
});