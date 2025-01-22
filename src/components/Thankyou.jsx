/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router'
import Logo from '../assets/NITS_LOGO.svg'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';


const Thankyou = () => {
  const candidateData = useSelector(state => state);
  
  useEffect(() => {
    axios.post("http://crystal.nits.agency/api/application01",candidateData)
      .then((res) => {
        console.log(res);
      })
  }, [])
  const navigate = useNavigate();
  return (
    <div className='thankyou-area' style={{ height: '100svh' }}>
      <img src={Logo}
        onClick={() => navigate('/')} />
      <p>YOUR APPLICATION SUBMITTED<br />SUCCESSFULLY</p>
    </div>
  )
}

export default Thankyou