import { useState } from "react"

function EventDemo(){

    const [counter,setCounter] = useState(0)
    const [name,setName] = useState('vivek')
    const [isLoggedIn,setIsLoggedIn] = useState(true)

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const increment = (val) => {
        setCounter(counter+val)
    }

    const decrement = (val) => {
        setCounter(counter-val)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return(
         <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8 col-md-10">

                    {/* Form Card */}
                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white py-3">
                            <h4 className="mb-0">
                              Event Demo
                            </h4>
                            <small>
                                Please enter your personal details
                            </small>
                        </div>

                        <div className="card-body p-4">


                             <div>
                                <h2>Count - {counter}</h2>
                                <h2>Name - {name}</h2>
                             </div>

                            <button onClick={() => increment(2) } className="btn btn-primary me-2">Increment</button>
                            <button onClick={() => decrement(2)} className="btn btn-danger" >Decrement</button>
                            {/* <input name="name" id="name" value={name} onChange={handleChange}></input> */}


                        </div>

                        <div className="card-body p-4">

                            <button onClick={handleLogin} className="btn btn-success">{isLoggedIn ? 'Logout' : 'Login'}</button>
                             
                        </div>

                    </div>

                    
                    
                </div>

            </div>

     

        </div>
    )
}

export default EventDemo