function CounterShow(props){

    let {counter,name}  = props
    
    console.log("Child Component Re-rendered")

    return(
        <div>
            <h2>Counter Component {counter}</h2>
             <h2>name {name}</h2>
        </div>
    )
}

export default CounterShow
