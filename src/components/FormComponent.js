import { useEffect, useState } from "react"


function FormComponent() {

    const [errors,setErrors] = useState({})
    const [errors1,setError1] = useState('state variable')
     
    const [formData , setFormData] = useState({
        firstname : "vivek",
        lastname : "",
        email:""
    })


 

    useEffect(() => {
        //   alert(errors1)
    },[errors1])


    const resetForm = () =>{
        
       setFormData({
        firstname : "vivek",
        lastname : "",
        email:""
    })
       
    }

    const handleChange = (e) => { 

       

        const {name,value} = e.target 

        setFormData((prevData) => (
            {...prevData,[name]:value}
        ))

         

    }

    const validateForm = () => {
    
        let newErrors = {}

        if(!formData.firstname.trim()){
            newErrors.firstname = "Firstname is required"
        }

         if(!formData.lastname.trim()){
            newErrors.lastname = "lastname is required"
        }

         if(!formData.email.trim()){
            newErrors.email = "email is required"
        }

        console.log("New ERrors Object=====>",newErrors)

        setErrors(newErrors)

        return Object.keys(newErrors).length == 0



    }

    const handleSubmit = (e) => {

     
        e.preventDefault()

        if(validateForm()){

            console.log("Form validated sucessfully Ready to submit==>",formData)
        }
        else{
            console.log("There are some errors")
        }
       


    }

    console.log("errors1 ========>",  errors1)

    return (
        <div className="container mt-4">
            Form Component
            <h2>{errors1}</h2>
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Firstname</label>
                            <input type="text" onChange={handleChange} value={formData.firstname} name="firstname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Firstname" />
                             <small className="text-danger">{errors.firstname}</small>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="exampleInputPassword1">Lastname</label>
                            <input type="text"  onChange={handleChange} value={formData.lastname} name="lastname" className="form-control" id="exampleInputPassword1" placeholder="Lastname" />
                            <small className="text-danger">{errors.lastname}</small>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="text"  onChange={handleChange} value={formData.email} name="email" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                            <small className="text-danger">{errors.email}</small>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </div>




            </form>


            <div>
                    <h2>Firstname = {formData.firstname} </h2>
                    <h2>Lastname = {formData.lastname} </h2>
                    <h2>Email = {formData.email} </h2>
            </div>

             <button onClick={resetForm}>Reset</button>
        </div>

       
    )
}

export default FormComponent