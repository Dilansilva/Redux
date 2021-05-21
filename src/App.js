import React from "react";
import TodoList from "../src/components/TodoList";

import {useSelector,useDispatch} from 'react-redux';

import {Increment,Decrement} from './actions/IncrementDecrement';


function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return <div>
    <h1>Number : {counter}</h1>
    <button onClick={() => dispatch(Increment())}>+</button>
    <button onClick={() => dispatch(Decrement())}>-</button>
  </div>;
}

export default App;
