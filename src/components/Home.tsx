import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../actions/counter'
function Home() {
    const counter = useSelector((state: any) => state.counterReducer.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1> Welcome a Home</h1>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      <h2>Counter {counter}</h2>
    </div>
  )
}
export default Home
