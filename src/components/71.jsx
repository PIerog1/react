import React from "react";
import { useState } from "react";
const List = ({ heading, items }) => {
    const defaultMessage = "Brak pozycji do wyświetlenia";
    return (
        <>
            <h2>{heading}</h2>
            {items.length > 0 ? (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (<p>{defaultMessage}</p>)
            }
        </>
    );
}
 
const DefaultValue = () => {
    return (
    <>    
         <List heading="Miasta" items={['Nowy Jork', 'Londyn', 'Paryż']}/>
         <List heading="Imiona" items={[]}/>
    </>
    );
}
 
export default DefaultValue;