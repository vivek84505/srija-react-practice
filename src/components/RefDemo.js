import { useEffect, useRef, useState } from "react"


function RefDemo(){
    
    const [message,setMessage] = useState("")

    const handleSubmit = () =>{
         const age = usernameRef.current.value++
         
         if(age <= 18){
            setMessage("You are a TeenAger")
         }
         else{
                setMessage("You are not a TeenAger")
         }

    }

    const handleClear = () => {
        usernameRef.current.value = ""
        usernameRef.current.focus()
    }

    const usernameRef = useRef(null)

    useEffect(()=>{
        usernameRef.current.focus()
    },[])

    console.log("Component Re-Rendered============>")
    
    return(
         <div className="container py-5">
         
            <div className="row justify-content-center">

                <div className="col-lg-8 col-md-10">

                    {/* Form Card */}
                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white py-3">
                            <h4 className="mb-0">
                               Refs Demo
                            </h4>
                            
                        </div>

                        <div className="card-body p-4">

                            
                            {/* <form> */}

                                {/* Firstname & Lastname */}
                                <div className="row mb-3">

                                    <div className="col-md-6 mb-3 mb-md-0">

                                        <label className="form-label">
                                            Username <span className="text-danger">*</span>
                                        </label>
                                     
                                        <input
                                            type="text"
                                            name="firstname"
                                            ref={usernameRef}
                                           
                                            className={`form-control`}
                                            placeholder="Enter firstname"
                                        />
                                          <small>{message}</small>      
                                       {/* <button onClick={handleSubmit}>
                                            Submit
                                       </button> */}

                                    </div>

                                    

                                </div>

                          
                                 

                                {/* Buttons */}
                                <div className="d-flex gap-2">

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                         onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>

                                      <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                        onClick={handleClear}
                                    >
                                        Reset
                                    </button>


                                </div>

                            {/* </form> */}

                           

                        </div>

                    </div>

                    

                </div>

            </div>

     

        </div>
    )
}

export default RefDemo