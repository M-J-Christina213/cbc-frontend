import "./testing.css"
export default function Testing(){
    let count = 0;

    function increment(){
        count = count + 1
    }
    return (
        <div className="background">
            <button>-</button>
            <span>{count}0</span>
            <button onClick={}>+</button>
        </div>
    )
}