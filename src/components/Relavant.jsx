/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom"
import Logo from '../assets/NITS_LOGO.svg'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setRelavant } from "../redux/userAuthSlice";

const Relavant = () => {
  const [currentSalary, setCurrentSalary] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [noticePeriod, setNoticePeriod] = useState('');
  const [reasonForJobChange, setReasonForJobChange] = useState('');
  const [whyHireYou, setWhyHireYou] = useState('');
  const dispatch = useDispatch('');
  const navigate = useNavigate('');

  const formatSalary = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleCurrentSalaryChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    if (!isNaN(value)) {
      const formattedValue = formatSalary(value);
      setCurrentSalary(formattedValue);
    } else {
      alert("Current salary must be a number.");
    }
  };

  const handleExpectedSalaryChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    if (!isNaN(value)) {
      const formattedValue = formatSalary(value);
      setExpectedSalary(formattedValue);
    } else {
      alert("Expected salary must be a number.");
    }
  };

  const validateForm = () => {
    if (!currentSalary || !expectedSalary || !noticePeriod || !reasonForJobChange || !whyHireYou) {
      alert("All fields are required.");
      return false;
    }
    if (whyHireYou.split(' ').length > 100) {
      alert("The 'Why should we hire you?' section should not exceed 100 words.");
      return false;
    }
    dispatch(setRelavant({expectedSalary: expectedSalary, currentSalary: currentSalary, noticePeriod: noticePeriod, jobChangeReason: reasonForJobChange, words: whyHireYou}));
    return true;
  };

  const form = useSelector(state => state);
  useEffect(() => {
    if(form.AdharCard=='' || form.City=='' || form.ZipCode=='' || form.Address=='' ){
      navigate('/additional')
    }
  }, []);

  const handleNextClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/thankyou");
    }
  };

  return (
    <div className="relavant-info-area" style={{ height: '100svh' }}>
      <img src={Logo} onClick={() => navigate('/')} />
      <p>RELAVENT INFORMATION (FACTS ONLY)</p>
      <input
        type="text"
        maxLength={10}
        placeholder="CURRENT SALARY"
        value={currentSalary}
        onChange={handleCurrentSalaryChange}
      />
      <input
        type="text"
        placeholder="EXPECTED SALARY"
        value={expectedSalary}
        maxLength={10}
        onChange={handleExpectedSalaryChange}
      />
      <input
        type="text"
        placeholder="NOTICE PERIOD"
        value={noticePeriod}
        onChange={(e) => setNoticePeriod(e.target.value)}
      />
      <input
        type="text"
        placeholder="REASON FOR JOB CHANGE"
        value={reasonForJobChange}
        onChange={(e) => setReasonForJobChange(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="WHY SHOULD WE HIRE YOU? (100 WORDS)*"
        value={whyHireYou}
        onChange={(e) => setWhyHireYou(e.target.value)}
      />
      <span onClick={handleNextClick}>VERIFY & NEXT</span>
    </div>
  )
}

export default Relavant;