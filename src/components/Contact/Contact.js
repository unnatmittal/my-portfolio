import React, { useRef } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_55kexfb', 'gmail', form.current, '59Hj7CWrhvsLYmfHx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <div className="c-box">
        <h2>Get in Touch</h2>
        <form onSubmit={sendEmail}>
          <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              class="form-control"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              class="form-control"
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">
            submit here
          </button>
        </form>
      </div>
    </div>
  );
};
