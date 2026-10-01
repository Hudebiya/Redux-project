import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement, reset } from '../redux/features/counterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const count= useSelector((state)=> state.counter.value)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button  onClick={()=> dispatch(decrement())}>Decrement</button>
      <button  onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter