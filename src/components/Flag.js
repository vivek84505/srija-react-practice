import React, { useEffect } from 'react'

function Flag() {

    useEffect(() => {
        console.log("Flag Component Mounted")
        
        return () => {
            console.log("Component is Unmounting")
        }

    },[])

  return (
    <div>
        <h2>You are not a teen Ager</h2>
    </div>
  )
}

export default Flag