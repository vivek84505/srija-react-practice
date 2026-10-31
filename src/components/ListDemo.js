

function ListDemo () {

    // const datalist =  ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa','vivek','srija'];
    
    const users = [
         {
            id:'3',
            firstname : 'Sachin',
            lastname : 'Reddy',
            designation:"software engineer"
        },
        {
            id:'1',
            firstname : 'Vivek',
            lastname : 'Deshpande',
            designation:"software engineer"
        },
        {
            id:'2',
            firstname : 'Srija',
            lastname : 'Reddy',
            designation:"software engineer"
        }
        
    ]
   
    // const mylist = datalist.map((data) => {
    //     return <li>{data}</li>
    // })

    return(
        <div>
            {/* List Demo
            <ul>
            {
                datalist.map((data,index) => {
                    console.log("index---------->",index)
                    return <li key={index}>{data}</li>
                })
            }
            </ul> */}

            {/* Table Demo */}

            <table className="table">
                <thead>
                <tr >
                <th scope="col">#</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Designation</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) =>  

                    <tr key={user.id}  >
                        <th scope="row">{user.id}</th>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.designation}</td>
                    </tr>
                 )}
              
               
                 
                </tbody>
                </table>

        </div>
    )
}

export default ListDemo