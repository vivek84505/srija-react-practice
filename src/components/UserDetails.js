import { NavLink, useParams } from "react-router-dom"




function UserDetails(){

    const {id} = useParams()
    
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

    const student = students.find(
        (student) => student.id === Number(id) 
    )

    if(!student){
        return <h3>Student Not Found</h3>
    }

    return(
        <div className="container mt-4">
            <h2>Student Details</h2>
                <div className="card">
                    <h4>{student.firstname} {student.lastname} </h4>
                    <p>Student ID : {student.id} </p>
                    <p>Student Email : {student.email} </p>
                    <NavLink to="/users">Back to students</NavLink>
                </div>
        </div>
    )
}

export default UserDetails