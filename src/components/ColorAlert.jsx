import React, { Children, useState } from "react";
import PropTypes from 'prop-types';

const Alert = ({message,onClose,type="success"}) => {
    return (
        <div className={'alert alert-${type} alert-dismissible' .trim()}>
            {message}
            <button className="btn-close" onClick={onClose}></button>
        </div>
    );
};
Alert.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(["primary","secondary","success","danger","warning","info","light","dark"]),
    className: PropTypes.string
};
const Alert3 = () => {
    const[alertVisible,setAlert1Visible] = useState(false);
    return(
        <div>
            {alertVisible && <Alert message="Sukces" onClose={() => setAlert1Visible(false)}/>}
            <button className="btn btn-primary" onClick={() => setAlert1Visible(true)}>
            </button>   
        </div>
    );
};
export default Alert3