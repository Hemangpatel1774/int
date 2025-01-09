/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/NITS_LOGO.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition } from '../redux/userAuthSlice';


const Position = () => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFocus = (e) => {
    setSelectedSkill(e.target.textContent);    
    e.target.style.border = '2px solid rgb(59, 182, 223)';
  };
  const form = useSelector(state => state);
  useEffect(() => {
    if(form.firmName=='' || form.secondName=='' || form.image=='' || form.email=='' || form.gender=='' || form.dob==''){
      navigate('/form')
    }
  }, [])
  const handleBlur = (e) => {
    e.target.style.border = '2px solid #9A9A9A';
  };
  const acceptSub = () => { 
    if (selectedSkill === '') {
      alert('Please select a skill');
      return
    }
    dispatch(setPosition(selectedSkill));
    navigate('/additional');
  }
  return (
    <div className="position-page" style={{ backgroundPosition: 'center -160px', height: '100svh' }}>
      <img src={Logo} 
onClick={()=> navigate('/')} />
      <div className="position-area">
        <p>APPLYING FOR</p>
        <div>
          <div className="skill" tabIndex="0" style={{ border: '2px solid #9A9A9A' }} onFocus={handleFocus} onBlur={handleBlur}><p>FROND END DEVELOPER (EXP)</p><span>(HTML,CSS,JS,JQ,REACT JS, GSAP, THREEJS)</span></div>
          <div className="skill" tabIndex="0" style={{ border: '2px solid #9A9A9A' }} onFocus={handleFocus} onBlur={handleBlur}><p>FROND END DEVELOPER ( INTERN / FRESHER )</p><span>(HTML,CSS,JS,JQ,REACT JS, GSAP, THREEJS) NO STIPED / INR 5K*</span></div>
          <div className="skill" tabIndex="0" style={{ border: '2px solid #9A9A9A' }} onFocus={handleFocus} onBlur={handleBlur}><p>BUSINESS DEVELOPMENT EXE (EXP)</p><span>(LEAD GENRATION, COLD EMAIL, CLOSER) IF YOU SELL, YOU BELONG HERE</span></div>
          <div className="skill" tabIndex="0" style={{ border: '2px solid #9A9A9A' }} onFocus={handleFocus} onBlur={handleBlur}><p>BUSINESS DEVELOPMENT EXE (INTERN / FRESHER)</p><span>(IF YOU CAN SELL, YOU BELONG HERE)</span></div>
        </div>
        <span onClick={acceptSub}>VERIFY AND NEXT</span>
      </div>
    </div>
  );
}
export default Position