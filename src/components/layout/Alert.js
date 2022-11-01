import React, { useContext } from "react";
import AlertContext from "../../context/Alert/AlertContext";

const Alert = () => {
    const alertcontext = useContext(AlertContext);
    const { alert } = alertcontext;
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle' style={{ marginRight: "10px" }} />
                {alert.msg}
            </div>
        )
    );
};

export default Alert;
