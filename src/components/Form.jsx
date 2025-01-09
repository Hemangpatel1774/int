/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Logo from '../assets/NITS_LOGO.svg'
// import { Link } from 'react-router-dom'
import imageCompression from 'browser-image-compression';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../redux/userAuthSlice';
import { useNavigate } from "react-router";

const Form = () => {
  const [image, setImage] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("MALE")
  const [dob, setDob] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const number = useSelector(state => state.mobileNumber);
  useEffect(() => {
    if(number==""){
      navigate('/Login')
    }
  }, [])
  
  const triggerFileInput = () => {
    document.querySelector('input[type="file"]').click();
  };
  const convB = async (imageFile) => {

    if (imageFile) {
      try {
        // Compression options
        const options = {
          maxSizeMB: 1, // Max file size in MB
          maxWidthOrHeight: 800, // Max width/height
          useWebWorker: true, // Use WebWorker for better performance
        };

        // Compress the image
        const compressedFile = await imageCompression(imageFile, options);

        // Convert the compressed file to a Blob URL to preview
        // const compressedImageURL = URL.createObjectURL(compressedFile);
        let reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          setImage(reader.result);

        };
      } catch (error) {
        console.error("Error during compression:", error);
      }
    }
  };

  const dataVerify = () => {

    if (image == "") {
      alert("Selfie is required");
      return;
    }
    if (firstName.length < 2 || !/^[a-zA-Z]+$/.test(firstName)) {
      alert("First name must be at least 2 characters long and contain only alphabets");
      return;
    }
    
    if (lastName.length < 2 || !/^[a-zA-Z]+$/.test(lastName)) {
      alert("Last name must be at least 2 characters long and contain only alphabets");
      return;
    }
    if (gender == "") {
      alert("Gender is required");
      return
    }
    if (!dob) {
      alert("Date of birth is required");
      return;
    }
    const today = new Date();
    const birthDate = new Date(dob);

    // Calculate the difference in years
    const age = today.getFullYear() - birthDate.getFullYear();
    const isOlderThan18 =
      age > 18 ||
      (age === 18 &&
        today.getMonth() > birthDate.getMonth()) ||
      (age === 18 &&
        today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!isOlderThan18) {
      alert("age should be greater than 18");
      return;
    }
    if (!email) {
      alert("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email.");
      return;
    }
    dispatch(setForm({ firstName, lastName, image, email, gender, dob }));
    console.log("this is working");

    navigate('/position');
  }
  return (
    <div className="form-area" >
      <img src={Logo} 
onClick={()=> navigate('/')} />
      <div className='selfie-area'>
        {image ? <img src={image} /> : null}
        <input type="file" capture="user" onChange={(e) => convB(e.target.files[0])} disabled={false} />

      </div>
      <p onClick={triggerFileInput}>TAKE YOUR LIVE SELFIE*</p>
      <div className="form-input-area">
        <p >ENTER YOUR DETAILS</p>

        <div className='input-area'>
          <input
            type="text"
            placeholder="FIRST NAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="LAST NAME"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
          </select>
          <input
            type="date"
            aria-current={dob == "" ? "DOB" : ""}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            type="email"
            style={{ width: "calc(100% - 20px)" }}
            placeholder="Email ADDRESS"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span onClick={dataVerify}>VERIFY & NEXT</span>
        </div>
      </div>
    </div>
  )
}

export default Form