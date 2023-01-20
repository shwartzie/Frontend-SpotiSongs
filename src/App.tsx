import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { userService } from './services/user.service.ts';
import { LandingPage } from './pages/LandingPage/LandingPage.tsx';
import { LogInPage } from './pages/LogInPage/LogInPage.tsx';
import { SignUpPage } from './pages/SignUpPage/SignUpPage.tsx';
import { Search } from './pages/Aside/NavPages/Search.tsx';
import { Library } from './pages/Aside/NavPages/Library.tsx';
import { Layout } from './components/LandingPageCmps/Layout.tsx';
const App = () => {

  // const get = async () => {
  //   const a = await userService.test();
  //   console.log(a);
  // };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< LandingPage />}></Route>
          {/* <Route exact path='/search/?name=' element={< Search />}></Route> */}
          {/* <Route exact path='/search' element={< Search />}></Route> */}
          {/* <Route exact path='/library' element={< Library />}></Route> */}
          <Route exact path='/log-in' element={< LogInPage />}></Route>
          <Route exact path='/sign-up' element={< SignUpPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
