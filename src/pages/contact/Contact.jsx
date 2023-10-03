import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log("message sent!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact-ctr-main flex-ctr-ctr-col">
        <h3 className="flex-ctr-ctr" id="contact">// WANT TO CHAT?</h3>
        <h1 className="flex-ctr-ctr">CONTACT ME</h1>
        <div className="contact-ctr">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </section>
  );
};