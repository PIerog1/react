import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ children, type = "danger", className = "" }) => {
    return (
        <div className={`alert alert-${type} ${className}`.trim()}>
            {children}
        </div>
    );
};

Alert.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
    className: PropTypes.string
};

export default Alert;