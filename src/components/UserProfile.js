function UserProfile(props){

    let {name}  = props
    
    console.log("Child Component Re-rendered")

    return(
        <div>
            <h2>User Name = {name}</h2>
             
        </div>
    )
}

export default UserProfile
