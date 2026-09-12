import PropTypes from "prop-types"


function CounterShow(props){

    let {counter,name,test}  = props
    
    console.log("Child Component Re-rendered")
    
    return(
        <div>
            <h2>Counter Component {counter}</h2>
             <h2>name {name}</h2>
                <h2>name {test}</h2>
        </div>
    )
}

CounterShow.propTypes = {
    counter:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired
}

export default CounterShow
