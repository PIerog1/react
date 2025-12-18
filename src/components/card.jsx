import React from "react";
import PropTypes from 'prop-types';

const Card = ({children, className = ""}) =>{
    return (
        <div className={'card ${className}'.trim()}
        style={{
            backgroundColor:"grey",
            color: "white",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "5px solid #000000ff"
        }}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    className: PropTypes.string
};

export default Card;