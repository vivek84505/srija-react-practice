import { useState } from "react";
function LiveName(){
    const [name , setName]= useState("");
    const handleChange = (event) => setName(event.target.value);
    return(

        <div> 
            <input type = "text" value = {name} onChange = {handleChange}></input>
            <div>Hello {name}</div>
         </div>
    )

}
export default LiveName;