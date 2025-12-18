import { useState } from "react"
function Counter({count, onIncrement})
{
    return(
        <div>
            <p>Licznik</p>
            <button onClick={onIncrement}>Kliknij</button>
        </div>
    )
}
export default Counter;