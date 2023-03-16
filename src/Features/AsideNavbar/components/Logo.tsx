import React from "react";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate();
    const handleLogo = () => {
        navigate("/");
    };
    return <div className="aside-logo-container" onClick={() => handleLogo()}></div>;
};
