import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "routes/main.routes";


const App = () => {
 
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
