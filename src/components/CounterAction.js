import React from 'react'

function CounterAction(props) {

  const {incermentCounter,decrementCounter} = props  
  return (
    <div> 
        
             <button onClick={incermentCounter}>Increment</button>
             <button onClick={decrementCounter}> Decrement</button>
    </div>
  )
}

export default CounterAction