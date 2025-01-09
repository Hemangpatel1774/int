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
  const validateForm = () => {
    if (!currentSalary || !expectedSalary || !noticePeriod || !reasonForJobChange || !whyHireYou) {
      alert("All fields are required.");
      return false;
    }
    if (whyHireYou.split(' ').length > 100) {
      alert("The 'Why should we hire you?' section should not exceed 100 words.");
      return false;
    }
        dispatch(setRelavant({expectedSalary: expectedSalary,currentSalary: currentSalary,noticePeriod: noticePeriod,jobChangeReason: reasonForJobChange , words: whyHireYou}));
    return true;
  };
  const form = useSelector(state => state);
  useEffect(() => {
    if(form.adharCard=='' || form.city=='' || form.zipCode=='' || form.address=='' ){
      navigate('/additional')
    }
  }, [])
  const handleNextClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/thankyou");
      // Proceed to the next step
    }
  };
  return (
    <div className="relavant-info-area" style={{ height: '100svh' }}>
      <img src={Logo} 
onClick={()=> navigate('/')} />
      <p>RELAVENT INFORMATION (FACTS ONLY)</p>
      <input
        type="number"
        maxLength={7}
        placeholder="CURRENT SALARY"
        value={currentSalary}
        onChange={(e) => setCurrentSalary(e.target.value)}
      />
      <input
        type="number"
        placeholder="EXPECTED SALARY"
        value={expectedSalary}
        maxLength={7}
        onChange={(e) => setExpectedSalary(e.target.value)}
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