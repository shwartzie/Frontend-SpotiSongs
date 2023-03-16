import React from "react";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate();
    const handleLogo = () => {
        navigate("/home");
    };
    return <div className="aside-logo-container" onClick={() => handleLogo()}></div>;
};
