import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from '../assets/NITS_LOGO.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setAdditional } from '../redux/userAuthSlice';

const Additional = () => {
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    const rawAadhar = aadhar.replace(/\s/g, ''); // Remove spaces for validation
    if (rawAadhar.length !== 12 || isNaN(rawAadhar)) {
      alert("Please enter a valid 12-digit Aadhar number.");
      return false;
    }
    if (address.trim() === '') {
      alert("Address cannot be empty.");
      return false;
    }
    if (city.trim() === '') {
      alert("City cannot be empty.");
      return false;
    }
    if (zipCode.length !== 6 || isNaN(zipCode)) {
      alert("Please enter a valid 6-digit Zip Code.");
      return false;
    }
    
    dispatch(setAdditional({ zipCode, city, address, adharCard: rawAadhar+'' }));
    return true;
  };

  const form = useSelector((state) => state);
  useEffect(() => {
    if (form.Position === '') {
      navigate('/position');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAadharChange = (e) => {
    const value = e.target.value.replace(/\s/g, ''); // Remove spaces
    if (value.length <= 12 && /^\d*$/.test(value)) {
      const formatted = value
        .match(/.{1,4}/g) // Split into chunks of 4 digits
        ?.join(' '+' ') || value; // Join chunks with spaces
      setAadhar(formatted);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/relativeinfo', '_self');
    }
  };

  return (
    <div className="home-area" style={{ backgroundPosition: 'center -150px', height: "100svh" }}>
      <img src={Logo} style={{ marginTop: '-30px' }} alt="Logo" />
      <div className="additional-area">
        <p>ADDITIONAL DETAILS</p>
        <input
          type="text"
          placeholder="AADHAR CARD NUMBER (XXXX XXXX XXXX)"
          maxLength={16} // 12 digits + 2 spaces
          value={aadhar}
          onChange={handleAadharChange}
        />
        <textarea
          type="text"
          placeholder="ADDRESS"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="CITY"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="number"
          placeholder="ZIP CODE"
          value={zipCode}
          maxLength={6}
          onChange={(e) => e.target.value.length < 7 && setZipCode(e.target.value)}
        />
        <span onClick={handleSubmit}>VERIFY & NEXT</span>
      </div>
    </div>
  );
};

export default Additional;
