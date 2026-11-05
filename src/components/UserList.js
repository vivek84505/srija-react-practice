
import { NavLink } from "react-router-dom"

function UserList (){

    const students = [
        {
            id: 1,
            firstname:"vivek",
            lastname:"Deshpande",
            email:"vivek84505@gmail.com"
        },
         {
            id: 2,
            firstname:"srija",
            lastname:"Reddy",
            email:"srija@gmail.com"
        }
        ,
         {
            id: 3,
            firstname:"Mukesh",
            lastname:"Barik",
            email:"mukesh@gmail.com"
        }
        

    ]


    return(
        <div className="container mr-4">
            <div className="d-flex justify-content-between mb-3">
                    <h2>Student List</h2>
            </div>
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
                    students.map((student) =>(
                        <tr key={student.id}>
                            <th scope="row">{student.id}</th>
                            <td>{student.firstname}</td>
                            <td>{student.lastname}</td>
                            <td>{student.email}</td>
                            <td><NavLink to={`/students/${student.id}`}>View Details</NavLink></td>
                        </tr>
                    ))
                  }  
               
                
                
                </tbody>
                </table>
            
        </div>
    )
}

export default UserList