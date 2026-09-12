import React, { useEffect, useState } from 'react'
import Flag from './Flag'

function Users() {

   const [userRole, setUserRole] = useState('admin') 
   const [age,setAge] = useState(15)
   const [showFlag, setShowFlag] = useState(false)
     const increment = () => {
        setAge(age + 1)
    }

    const decrement = () => {
        setAge(age - 1)
    }


   const toggleRole = () => {
        
        if(userRole === 'admin'){
            setUserRole('user')
        }
        else{
            setUserRole('admin')
        }
   }


   useEffect(() => {
        console.log('Component Mounted')  

   },[userRole]) 

   useEffect(() => {
    
        if(age > 18){
            setShowFlag(true)
        }
        else{
             setShowFlag(false)
        }

   },[age])

  return (
    <div>
        <div id="user-profile">

            <h2>User Role - {userRole}</h2>
             <h2>User Age - {age}</h2>
             {
                showFlag && (
                    <Flag/>
                )
             }
             <button onClick={toggleRole}>Toggle Role</button>

            <button onClick={increment}>Increment</button>
             <button onClick={decrement}> Decrement</button>
        </div>
    </div>
  )
}

export default Users