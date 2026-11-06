
import { NavLink } from "react-router-dom"
import api from "./services/api"
import { useEffect,useState } from "react"


function UserList (){

    const [employeelist,setEmployeeList] = useState([])
    const [ showlist, setShowList] = useState(true)

    useEffect(() => {
        getEmployee()
    },[])

    const getEmployee = async () => {
        
        const response = await api.get("/api/employees",formData)
        
        if(response?.data?.status == "sucessfull" && response?.data?.data?.length > 0){
                setEmployeeList(response.data.data)
        }
        else{
            alert("No data found")
        }
    }

    // const students = [
    //     {
    //         id: 1,
    //         firstname:"vivek",
    //         lastname:"Deshpande",
    //         email:"vivek84505@gmail.com"
    //     },
    //      {
    //         id: 2,
    //         firstname:"srija",
    //         lastname:"Reddy",
    //         email:"srija@gmail.com"
    //     }
    //     ,
    //      {
    //         id: 3,
    //         firstname:"Mukesh",
    //         lastname:"Barik",
    //         email:"mukesh@gmail.com"
    //     }
        

    // ]


    return(
        <div className="container mr-4">
            <div className="d-flex justify-content-between mb-3">
                    <h2>Student List</h2>
            </div>
            <button onClick={() => {setShowList(!showlist)}}>Show List</button>
                {showlist && (
 <table class="table table-dark">
                <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Details</th>
                </tr>
                </thead>
                <tbody>
                  {
                    employeelist.map((employee) =>(
                        <tr key={employee.employee_id}>
                            <th scope="row">{employee.employee_id}</th>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td><NavLink to={`/students/${employee.id}`}>View Details</NavLink></td>
                        </tr>
                    ))
                  }  
               
                
                
                </tbody>
                </table>
                )}
               
            
        </div>
    )
}

export default UserList