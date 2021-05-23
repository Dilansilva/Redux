import React, { useState } from "react";
import TodoList from "../src/components/TodoList";

import {useSelector,useDispatch} from 'react-redux';

import {Increment,Decrement} from './actions/IncrementDecrement';
import {addTask} from './actions/addTask';


function App() {
  const [fName,SetFname] = useState('');//state for first name
  const [lName,SetLname] = useState('');//state for last name

  const AddStore = (e) => {
    e.preventDefault();
    addTask(fName);
    SetFname('');
  }

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const create = useSelector(state => state.create);

  const Create = useState();
  return <div>
    <h1>Number : {counter}</h1>
    <button onClick={() => dispatch(Increment())}>+</button>
    <button onClick={() => dispatch(Decrement())}>-</button>

    <br/>
    <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname" onChange={e => SetFname(e.target.value)}/><br/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" onChange={e => SetLname(e.target.value)}/><br/>
  <button onClick={AddStore}>ADD</button>
  </div>;
}

export default App;
