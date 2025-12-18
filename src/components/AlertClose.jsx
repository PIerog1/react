import React from "react";
import { useState } from "react";

const Alert = ({message, onClose}) =>{
    return (
        <div className="Alert, Alert-warning,Alert-dismisible">
            {message}
        </div>
    );
};
const Alert2 = () =>{
    const [alertVisible,setAlertVisible] = useState(false);
    const handleClose = () =>{
        setAlertVisible(false);
    };

    const handleShowAlert = () => {
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        },3000);
    };
    return (
        <div>
            {alertVisible && <Alert message="Uwaga zamykam sie za 3 sekundy" onClose={handleClose}/>}
            <button className="btn btn-primary" onClick={handleShowAlert}>
                Pokaz Alert
            </button>
        </div>
    );
};
export default Alert2;