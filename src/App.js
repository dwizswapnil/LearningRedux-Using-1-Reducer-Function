import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IncNumber,DecNumber,UpNumber,DownNumber,IncreaseNumber ,DecreaseNumber } from './Actions/Index';
import "./App.css";

const App = () => {

  const myState = useSelector((state)=> state.changetheNumber );


  const myValue = useSelector((state)=> state.changetheValue );


  const myStatus = useSelector((state)=> state.changetheStatus );


  const dispatch = useDispatch();


  return (
    <>
   <div className="container">
    <h1> Increament/Decreament Counter </h1>
    <h3>Using React-Redux</h3>

    <div className="quantity" style={{margin:20}} >
      <button className='quantity__minus' title='Decrement' onClick={()=>dispatch(DecNumber())}> <span> - </span></button>
      <input name='quantity' type="text" className='quantity__input' value={myState} />
      <button className='quantity__plus' title='Increment' onClick={()=>dispatch(IncNumber())}> <span> + </span></button>
    </div>



    <div className="quantity"  style={{margin:20}}>
      <button className='quantity__minus' title='Down' onClick={()=>dispatch(DownNumber())}> <span> - </span></button>
      <input name='quantity' type="text" className='quantity__input' value={myValue} />
      <button className='quantity__plus' title='Up' onClick={()=>dispatch(UpNumber())}> <span> + </span></button>
    </div>




    <div className="quantity"  style={{margin:20}}>
      <button className='quantity__minus' title='Decrement' onClick={()=>dispatch(DecreaseNumber())}> <span> - </span></button>
      <input name='quantity' type="text" className='quantity__input' value={myStatus} />
      <button className='quantity__plus' title='Increment' onClick={()=>dispatch(IncreaseNumber())}> <span> + </span></button>
    </div>


    </div>

    </>
  )
}

export default App