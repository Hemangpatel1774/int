import { useState } from "react";
import Logo from '../assets/NITS_LOGO.svg';
import { useDispatch } from "react-redux";
import { setNumber } from "../redux/userAuthSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <11) {
      setMobileNumber(value);
    }
  };
  const validateNumber = () => {
    if (mobileNumber.length === 10) {
      setIsValid(true);
      dispatch(setNumber(mobileNumber));
    navigate('/form');

      return true;
    } else {
      setIsValid(false);
      return false;
    }
  };

  return (
    <div className="home-area" style={{ backgroundPosition: 'center -120px',height:'100svh'}}>
      <img src={Logo} 
onClick={()=> navigate('/')} />
      <div className="login-area">
        <p>ENTER YOUR DETAILS</p>
        <input
          type="number"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={handleInputChange}
        />
        {!isValid && <p style={{ color: 'fff' }}>Please enter a valid 10-digit mobile number</p>}
        <span onClick={validateNumber}>VERIFY & NEXT</span>
      </div>
    </div>
  );
};

export default Login;