import React from "react";

const Przycisk = ({text="kliknij mnie"}) =>{
    return (
        <button
            onClick={() => console.log("Kliknieto przycisk")}
            onDoubleClick={() => console.log("Podwójne klikniecie!")}
            style={{
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "5px",
                border: "2px solid #000000ff"
            }}
        >
            {text}
        </button>
    );
};
export default Przycisk;