import { red } from '@mui/material/colors';
import { useState } from 'react';
import {useRef} from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import Massage from './massage';
import {ModesFunc} from "./modes";

export default function Reference() {


  const Modes = ModesFunc();

  const form = useRef();

  const siteKey = "6LextTkrAAAAAG7D6wUGa4Y7591QS4y6EUbda58L";

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [error,setError] = useState("");

   const [message,setMassage] = useState({message:null,type:null,show:false});

   const recaptchaRef = useRef(null);
 
   const [captchaToken, setCaptchaToken] = useState(null);

   
  return (
    <div style={{margin:"50px",background:Modes[4],color:"#FFFFFF",borderRadius:"25px",width:"90vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <form ref={form} id="contact-form" onSubmit={e => {
          e.preventDefault();
          if(!captchaToken) {
            setError("please verify that you are not a robot");
          }
          else {
            setError("");
            emailjs.sendForm(
              'service_sggfgfy',
              'template_v2iancg',
              form.current,
              'hNAWHXQ9qFQ45aE8R',
            ).then(
              () => {
                setMassage({message:"success!",type:"success",show:true});
              }
            ).catch(
              () => {
                setMassage({message:"unsuccess!",type:"danger",show:true});
              }
            )
          } 
    
      }} style={{ display: 'flex', flexDirection:"column" , padding:"50px", gap:"25px" , justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="name">name:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">email:</label>
        <input type="email" name="email" required />

        <label htmlFor="title">massage title:</label>
        <input type="text" name="title" required />

        <label htmlFor="message">massage:</label>
        <textarea name="message" required style={{resize:"none"}}></textarea>

        <ReCAPTCHA ref={recaptchaRef} onChange={token => setCaptchaToken(token)} sitekey={siteKey}/>

        <input type="submit" value="send"/>

        <p style={{color:red[500],fontSize:"30px"}}>{error}</p>
      </form>

      <Massage message={message.message} type={message.type} show={message.show}/>

      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
} 


