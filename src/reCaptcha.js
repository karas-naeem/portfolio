import React, { useState } from 'react';

export default function ReCaptcha() {
  const siteKey = "6LextTkrAAAAAG7D6wUGa4Y7591QS4y6EUbda58L";

   const [error,setError] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (token) => {
    if(!token) {
      setError(true);
      return;
    }
    document.getElementById('contact-form').submit();
  };

  return (
    <div style={{margin:"50px"}}>
      <form id="contact-form" action="/contact" method="POST" style={{ display: 'flex', flexDirection:"column" , border:"5px solid crimson" , padding:"50px" , gap:"25px" , justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="name">name:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">email:</label>
        <input type="email" name="email" required />

        <label htmlFor="message">massage:</label>
        <textarea name="message" required></textarea>

        <div className="g-recaptcha" data-sitekey={siteKey} data-action="LOGIN"></div>

        <input type="submit" value="send" />

        <p style={{color:"red"}}>{error ? "please verify that you are not a robot" : ""}</p>
      </form>

      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
}
