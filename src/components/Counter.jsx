import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { increment , decrement, incByAmount, decByAmount } from '../redux/features/counterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const count= useSelector(state=> state.counter.value)
    const [num, setNum] = useState("")
  return (
    <div>
      <h2>{count}</h2>
      <button className='px-5 py-3 border rounded m-4'
         aria-label="Increment value" 
         onClick={()=>dispatch(increment())}>Increment</button>
         <span className='p-5 text-3xl font-bold'>{count}</span>

      <button className='px-5 py-3 border rounded m-4'
        aria-label="Increment value"
         onClick={()=> dispatch(decrement())}>Decrement</button>
         <span className='p-5 text-3xl font-bold'>{count}</span>

      <button className='px-5 py-3 border rounded m-4'
         onClick={()=> {dispatch(incByAmount(Number(num))) 
         setNum("")
         }
         }>
          Increment By Amount</button>

       <button className='px-5 py-3 border rounded m-4'
         onClick={()=> {dispatch(decByAmount(Number(num))) 
         setNum("")
         }
         }>
          Decrement By Amount</button>

        <input value={num} onChange={(e)=> setNum(e.target.value)} type="number" placeholder='Enter a Number:'/>
        <button onClick={()=>{
          dispatch(incByAmount(Number(num)))
          setNum("")
        }}></button>
    </div>
  )
}

export default Counter