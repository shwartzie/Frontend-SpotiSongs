import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "routes/main.routes";


export const App = () => {
 
    return (
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    );
};
