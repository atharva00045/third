import { useEffect, useState } from "react";

function Hooks2(){

    const[number , no]=useState(0)

    const increment=()=>{
        no(number +1)
    }

    const decrement=()=>{
        no(number -1)
    }

    const reset=()=>{
        no(0)
    }

    return(
      <>
        <h1>{number}</h1>
        <button onClick={increment}>increrment</button>
        <button onClick={decrement}>increrment</button>
        <button onClick={reset}>increrment</button>

        <Timer />
        
      </>
    )

}

export default Hooks2;



function Timer(){
    const [second , setsecond]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setsecond(prev =>prev+1)
        },1000)

        return ()=> clearInterval(interval)

    },[])

    return <h2>time : {second}</h2>

}