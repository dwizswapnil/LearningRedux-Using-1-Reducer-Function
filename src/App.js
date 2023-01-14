import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IncNumber,DecNumber } from './Actions/Index';
import "./App.css";

const App = () => {

  const myState = useSelector((state)=> state.changetheNumber );
  const dispatch = useDispatch();
  return (
    <>
   <div className="container">
    <h1> Increament/Decreament Counter </h1>
    <h3>Using React-Redux</h3>

    <div className="quantity">
      <button className='quantity__minus' title='Decrement' onClick={()=>dispatch(DecNumber())}> <span> - </span></button>
      <input name='quantity' type="text" className='quantity__input' value={myState} />
      <button className='quantity__plus' title='Increment' onClick={()=>dispatch(IncNumber())}> <span> + </span></button>
    </div>
   </div>

    </>
  )
}

export default App