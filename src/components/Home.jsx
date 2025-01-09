
import Logo from '../assets/NITS_LOGO.svg'
import { useNavigate } from 'react-router'
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-area" style={{height:"100svh"}}>
    <img src={Logo} 
onClick={()=> navigate('/')} />
      <p>YO, LET’S CRUSH THIS!<br/>FILL OUT THE FORM AND LET&apos;S GO!</p>
      <span onClick={()=>navigate('/form')}>GET STARTED</span>
    </div>
  )
}

export default Home