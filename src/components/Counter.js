import { useState } from "react";
import CounterShow from "./CounterShow";
import UserProfile from "./UserProfile";

function Counter(){

    const [count,setCount] = useState(0)
    const name = "Vijay"
    const [message,setMessage] = useState("Hello")
    
    const handleChange = (event) => {
        setMessage(event.target.value)
    }


    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    console.log("Parent Component Re-rendered")
    
    return(
        
        <div>
            <h3>Name - {name}</h3>
            <h3>Message - {message}</h3>
            <input name="message" value={message} onChange={handleChange} />
        
            <UserProfile name="Vivek"/>
            <UserProfile name="Srija"/>
            <UserProfile name="Kaushik"/>


            <CounterShow name='Vivek' counter={count}  />

             <button onClick={increment}>Increment</button>
             <button onClick={decrement}> Increment</button>
              <button onClick={() => alert('test')}> Alert</button>
             {
                (count % 2 === 0)?(<h2>Even</h2>):(<h2>ODD</h2>)
             }

              {
                (count > 18 )?(<h2>Not A Teen Ager</h2>):(<h2>Teen Ager</h2>)
             }

        </div>
    )
}

export default Counter;