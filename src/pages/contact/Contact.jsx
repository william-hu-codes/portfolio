import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import "./Contact.css"

export default function Contact(){
  const form = useRef();
  const [isSent, setIsSent] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [status, setStatus] = useState("Send")

  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true)
    setStatus("Sending...")
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log("message sent!")
          setIsSent(true)
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
                <input type="text" name="user_name" disabled={disabled} required />
                <label>Email</label>
                <input type="email" name="user_email" disabled={disabled} required />
                <label>Message</label>
                <textarea name="message" disabled={disabled} required />
                <div></div>
                <input type="submit" disabled={disabled} value={isSent ? "Message sent!" : status} />
            </form>
        </div>
    </section>
  );
};