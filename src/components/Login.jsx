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
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length > 10) {
      value = value.slice(0, 10); // Limit to 10 digits
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + ' ' + value.slice(5); // Insert space after 5 digits
    }
    setMobileNumber(value);
  };

  const validateNumber = () => {
    const cleanedNumber = mobileNumber.replace(/\s/g, ''); // Remove spaces
    if (cleanedNumber.length === 10) {
      setIsValid(true);
      dispatch(setNumber(cleanedNumber));
      navigate('/form');
      return true;
    } else {
      setIsValid(false);
      return false;
    }
  };

  return (
    <div className="home-area" style={{ backgroundPosition: 'center -120px', height: '100svh' }}>
      <img src={Logo} onClick={() => navigate('/')} />
      <div className="login-area">
        <p>ENTER YOUR DETAILS</p>
        <input
          type="text"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={handleInputChange}
        />
        {!isValid && <p style={{ color: '#fff' }}>Please enter a valid 10-digit mobile number</p>}
        <span onClick={validateNumber}>VERIFY & NEXT</span>
      </div>
    </div>
  );
};

export default Login;