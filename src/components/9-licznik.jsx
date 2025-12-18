import React from "react";
import { useState } from "react";
import Counter from "./counter.jsx";

function Counter2() {
    const [count, setCount] = useState(0);

    const HandleIncrement = () => {
        setCount(prev => prev +1);
    };
    return(
        <div>
            <h1>Wartosc w App: {count}</h1>
            <Counter count={count} onIncrement={HandleIncrement}/>
        </div>
    );
}
export default Counter2;