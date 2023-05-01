import React from "react";
import {Link} from "react-router-dom";

const ToolBar = () => {
    return (
        <div className="d-flex al-center j-center">
            <Link className="m-10" to="/register">Register Page</Link>
            <Link className="m-10" to="/login">Login Page</Link>
        </div>
    );
};

export default ToolBar;