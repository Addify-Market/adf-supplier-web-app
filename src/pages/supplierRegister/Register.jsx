import React, { useEffect , useState} from 'react';
import './register.css'
import {Link} from 'react-router-dom'
import Image from '../../assets/Image.png'
import loader from "../../assets/loading2.gif";
import axios from "axios";
import {data} from "../../config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useHook from "../../hooks";
import { useNavigate } from 'react-router-dom';
toast.configure();
const Register = () => {
 const [loading,setLoading] = useState(true);
 const [walletId,setWalletId] = useState(null);
 const [values, setValues] = useState({
  name: "",
  email: "",
  phone: "",
  business: "",
  buttonText: "Submit",
  });
const { name, phone, email, business } = values;
 const message = "Please Set Your Profile..."
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
const {toggleUser} = useHook();
const changeUserStatus = (e) => {
  e.preventDefault()
  console.log("hits");
  toggleUser(true, 'addonOwner',true);
  navigate('/supplier/dashboard');
}
  
  
  
  
  
  
  
  
  
  const sendRequest = async (e) => {
    e.preventDefault();
    // setValues({ ...values, buttonText: "requesting.." });
    // try {
    // let result = await axios({
    // method: "POST",
    // url: `${process.env.REACT_APP_API_URL}/signup`,
    // data: { name, email, password, repassword },
    // });
    // if (result) {
    // //console.log(result)
    // toast.success(result.data.message);
    // setValues({ ...values, buttonText: "Submit" });
    // }
    // } catch (e) {
    // //console.log(e.response.data.error);
    // toast.error(e.response.data.error);
    // setError(e.response.data.error);
    // setValues({ ...values, buttonText: "Submit" });
    // }
    try {
      
    let result = await axios({
      method: "POST",
        url: `${data.serviceUrl}/supplier`,
        data: {walletId,name,phone,email,business},
      });
      if (result) {
        //console.log(result)
        toast.success(result.data.message);
        changeUserStatus();
      }
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
      <p className='upload-file'>Upload Profile pic</p>
      <div className="upload-img-show">
        <img src={Image} alt="banner" />
        <p>browse media on your device</p>
      </div>
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
        <button className='register-writeButton'>register</button>
        <Link to="/login">
          <button className='reg-login-writeButton' >Login</button>
        </Link>
       </div>
      </form>
    </div>
    </>
    )}
      
    </div>
   )
};

export default Register;
