import React, { useEffect , useState} from 'react';
import './register.css'
import loader from "../../assets/loading2.gif";
import axios from "axios";
import {data} from "../../config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
 const [loading,setLoading] = useState(true);
 const [walletId,setWalletId] = useState(null);
 const [message,setMessage] =useState( "Please Set Your Profile...");
 const [values, setValues] = useState({
  name: "",
  email: "",
  phone: "",
  business: "",
  buttonText: "Submit",
  });
const { name, phone, email, business } = values;
 
 useEffect(() => {
  setTimeout(() => {
    setLoading(false);
    setWalletId(localStorage.getItem('addonOwner'));
  }, 2000);
}, []);


const handleChange = (name) => (e) => {
  setValues({ ...values, [name]: e.target.value });
};
let navigate = useNavigate();

  
const sendRequest = async (e) => {
  e.preventDefault();
  
  try {
  console.log("name1",name);
  if(name===""){
    alert("Please Fill Up Your Name");
    return ;
  }
  setLoading(true);
  console.log("ok");
  setMessage("Please Wait")   
   await axios({
    method: "POST",
      url: `${data.serviceUrl}/supplier`,
      data: {walletId,name,phone,email,business},
    });
      setLoading(false);
      setMessage("Success!");
      navigate('/supplier/dashboard');
  } catch (error) {
    toast.error(error);
  }
};
    
  return (

    <div className='register section__padding'>
      {loading ? (
        <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
        <img
          src={loader}
          alt="vybuhijk"
          style={{ width: "50%", margin: "auto" }}
        />
        <br />
        <b style={{ fontSize: "20pt" }}>
          {message ? message : "Creating. Please wait..."}
        </b>
      </div>
      ) :(
        <>
      <div className="register-container">
      <h1>fill up the form</h1>
      
      <form onSubmit={sendRequest} className='register-writeForm form-data' autoComplete='off' >
      
        <div className="register-formGroup">
          <label>Name</label>
          <input type="text" onChange={handleChange("name")} value={name} placeholder='Name' />
        </div>
        <div className="register-formGroup">
          <label>Phone</label>
          <input type="text" onChange={handleChange("phone")} value={phone} placeholder='Phone' />
        </div>
        <div className="register-formGroup">
          <label>Email</label>
          <input type="email" onChange={handleChange("email")} value={email} placeholder='Email' />
        </div>
        <div className="register-formGroup">
          <label>Business</label>
          <input type="text" onChange={handleChange("business")} value={business} placeholder='Business' />
        </div>
       <div className="register-button">
        <button className='register-writeButton'>submit</button>
       </div>
      </form>
    </div>
    </>
    )}
      
    </div>
   )
};

export default Register;
