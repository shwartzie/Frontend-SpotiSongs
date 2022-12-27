import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { userService } from './services/user.service.ts';
import { LandingPage } from './pages/LandingPage/LandingPage.tsx';
import { LogInPage } from './pages/LogInPage/LogInPage.tsx';
import { SignUpPage } from './pages/SignUpPage/SignUpPage.tsx';

const App = () => {

  // const get = async () => {
  //   const a = await userService.test();
  //   console.log(a);
  // };

  return (
    <Router>
      <div className="App">
        {/* <button onClick={() => get()}>HELLO</button> */}
        
        <Routes>
          <Route exact path='/' element={< LandingPage />}></Route>
          <Route exact path='/log-in' element={< LogInPage />}></Route>
          <Route exact path='/sign-up' element={< SignUpPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
