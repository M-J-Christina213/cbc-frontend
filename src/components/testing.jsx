import { useState } from "react"
import "./testing.css"
export default function Testing(){
    const [count,setCount] = useState(0)

    function increment(){
        console.log("incrementing")
        setCount(count + 1)
    }

    function decrement(){
        console.log("decrementing")
        setCount(count-1)
    }
    return (
        <div className="background">
            <button>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}