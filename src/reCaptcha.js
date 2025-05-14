import React from 'react';

export default function ReCaptcha() {
  const siteKey = "6LextTkrAAAAAG7D6wUGa4Y7591QS4y6EUbda58L";

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (token) => {
    document.getElementById('contact-form').submit();
  };

  return (
    <div>
      <form id="contact-form" action="/contact" method="POST" style={{ display: 'flex', flexDirection:"column" , justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="name">name:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">email:</label>
        <input type="email" name="email" required />

        <label htmlFor="message">massage:</label>
        <textarea name="message" required></textarea>

        <div class="g-recaptcha" data-sitekey={siteKey} data-action="LOGIN"></div>

        <input type="submit" value="send" />
      </form>

      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
}
