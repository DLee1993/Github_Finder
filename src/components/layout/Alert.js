import React from "react";

export const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div className={`alert-${alert.type}`}>
                <i className="fas fa-info-circle" style={{marginRight: '10px'}}/>{alert.msg}
            </div>
        )
    )
};
