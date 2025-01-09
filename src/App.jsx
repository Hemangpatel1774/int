import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Form from './components/Form';
import Position from './components/Position';
import Additional from './components/Additional';
import RelativeInfo from './components/Relavant';
import Thankyou from './components/Thankyou';
import "./App.css"
import { useEffect, useState } from 'react';
import Loader from './assets/loader.svg'
const App = () => {
  const [isLoad, setisLoad] = useState(true)
  useEffect(() => {
    setTimeout(() =>setisLoad(false),1000);
  })
  
    return (
      <div>
      {window.innerWidth > 570 ? <div className="mobile-warning">This website is only for mobile devices.</div> : isLoad ?<img className='app-loader' src={Loader} /> :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/position" element={<Position />} />
          <Route path="/additional" element={<Additional />} />
          <Route path="/relativeinfo" element={<RelativeInfo />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    }
    </div>
    );
}

export default App;