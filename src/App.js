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

    <br/>
    <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname"/><br/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"/><br/>
  <button >ADD</button>
  </div>;
}

export default App;
