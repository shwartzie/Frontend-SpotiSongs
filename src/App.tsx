import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LandingPage } from './Features/LandingPage/pages/LandingPage';
import { LogInPage } from './Features/UserCommon/Login/pages/LogInPage';
import { SignUpPage } from './Features/UserCommon/Signup/pages/SignUpPage';

const App = () => {

  // useEffect(() => {
  //   ( async() => {
  //     const res = await axios.get('test')
  //   })();
  // }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/log-in' element={<LogInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



{/* <Route exact path='/search/?name=' element={< Search />}></Route> */ }
{/* <Route exact path='/search' element={< Search />}></Route> */ }
{/* <Route exact path='/library' element={< Library />}></Route> */ }
{/* <Route exact path='/log-in' element={< LogInPage />}></Route> */ }
{/* <Route exact path='/sign-up' element={< SignUpPage />}></Route> */ }