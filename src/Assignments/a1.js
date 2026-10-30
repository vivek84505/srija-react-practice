// Create a counter using const.
import { useState } from "react";
function Counter()
{
    const [count, setCount] = useState(0);
    function increase(){
        setCount(count+1)
    };

    const decrease= () =>{
        setCount(count-1)
    };

    const reset = () =>{setCount(0)}


    return(
        <div>
            <h1>Count: {count} </h1>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )
}
export default Counter;