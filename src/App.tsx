import React, { useEffect } from "react";
import { MainRoutes } from "routes/main.routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LogInPage } from "./Features/UserCommon/Login/pages/LogInPage";
import { SignUpPage } from "./Features/UserCommon/Signup/pages/SignUpPage";
import { useSelector } from "react-redux/es/exports";

const App = () => {
    const { loggedInUser }: any = useSelector((state: any) => state.userModule);
    useEffect(() => {
        console.log('loggedinUSer !! ',loggedInUser);
    }, [loggedInUser]);

    return (
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    );
};

export default App;

{
    /* <Route exact path='/search/?name=' element={< Search />}></Route> */
}
{
    /* <Route exact path='/search' element={< Search />}></Route> */
}
{
    /* <Route exact path='/library' element={< Library />}></Route> */
}
{
    /* <Route exact path='/log-in' element={< LogInPage />}></Route> */
}
{
    /* <Route exact path='/sign-up' element={< SignUpPage />}></Route> */
}
