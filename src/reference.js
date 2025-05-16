import { blue } from '@mui/material/colors';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Reference() {
  const siteKey = "6LextTkrAAAAAG7D6wUGa4Y7591QS4y6EUbda58L";

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [error,setError] = useState(false);
 
  // eslint-disable-next-line no-unused-vars
  const onSubmit = (token) => {

    if(!token) {
      setError(true);
    }
    document.getElementById('contact-form').submit();
  };

  return (
    <div style={{margin:"50px",background:blue[500],borderRadius:"25px",width:"90vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <form id="contact-form" onSubmit={e =>{
        e.preventDefault();
      }} style={{ display: 'flex', flexDirection:"column" , padding:"50px", gap:"25px" , justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="name">name:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">email:</label>
        <input type="email" name="email" required />

        <label htmlFor="message">massage:</label>
        <textarea name="message" required style={{resize:"none"}}></textarea>

        <ReCAPTCHA sitekey={siteKey}/>

        <input type="submit" value="send" onSubmit={onSubmit}/>

        <p style={{color:"red"}}>{error ? "please verify that you are not a robot" : ""}</p>
      </form>

      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
}
