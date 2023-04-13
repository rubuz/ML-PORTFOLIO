import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f6t6sds",
      "template_a37r9su",
      form.current,
      "fiUbEO2rB7nVQPQo-"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Write to me</h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="contact__form"
          >
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your name"
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <textarea
                name="area"
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="button button--flex">
              Send Message <i className="uil uil-message button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
