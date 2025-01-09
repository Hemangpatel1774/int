import { useNavigate } from 'react-router'
import Logo from '../assets/NITS_LOGO.svg'


const Thankyou = () => {
  const navigate = useNavigate();
  return (
    <div className='thankyou-area' style={{ height: '100svh' }}>
      <img src={Logo} 
onClick={()=> navigate('/')} />
      <p>YOUR APPLICATION SUBMITTED<br/>SUCCESSFULLY</p>
    </div>
  )
}

export default Thankyou