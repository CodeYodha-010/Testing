import { useState } from 'react'
import './Increment.css'


function Increment(){
  

  const [add,setadd]=useState(0)
  


  function addition(){
   
    setadd(add+1);
  }

  function subtraction(){
    if(add>0)
   {
    setadd(add-1);

   }
   else
    setadd(add)
    
  }
   function reset(){
    
    setadd(0);
   }


  return(
    <>
     <div class="counter-container">
        <h1>Counter</h1>
        <div id="counter-display" >{add}</div>
        <div class="button-group">
            <button id="decrement-btn" onClick={subtraction}>-</button>
            <button id="reset-btn" onClick={reset}>Reset</button>
            <button id="increment-btn" onClick={addition}>+</button>
        </div>
    </div>
    </>
  )
}

export default Increment;