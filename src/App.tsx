import React, { useEffect } from 'react';
import { MainRoutes } from 'routes/main.routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LogInPage } from './Features/UserCommon/Login/pages/LogInPage';
import { SignUpPage } from './Features/UserCommon/Signup/pages/SignUpPage';

const App = () => {



  return (

    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>

  );
};

export default App;



{/* <Route exact path='/search/?name=' element={< Search />}></Route> */ }
{/* <Route exact path='/search' element={< Search />}></Route> */ }
{/* <Route exact path='/library' element={< Library />}></Route> */ }
{/* <Route exact path='/log-in' element={< LogInPage />}></Route> */ }
{/* <Route exact path='/sign-up' element={< SignUpPage />}></Route> */ }