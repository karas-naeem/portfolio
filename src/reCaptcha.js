import React from 'react';

export default function ReCaptcha() {
  const siteKey = "6LextTkrAAAAAG7D6wUGa4Y7591QS4y6EUbda58L";

  // دالة التحقق عند النقر على زر الإرسال
  const onSubmit = (token) => {
    document.getElementById('contact-form').submit();
  };

  return (
    <div>
      <form id="contact-form" action="/contact" method="POST" style={{ display: 'flex', flexDirection:"column" , justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="name">الاسم:</label>
        <input type="text" name="name" required />

        <label htmlFor="email">البريد الإلكتروني:</label>
        <input type="email" name="email" required />

        <label htmlFor="message">الرسالة:</label>
        <textarea name="message" required></textarea>

        <button
          className="g-recaptcha"
          data-sitekey={siteKey}
          data-callback="onSubmit"
          data-action="submit"
        >
          إرسال
        </button>
      </form>

      {/* سكربت reCAPTCHA */}
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
}
