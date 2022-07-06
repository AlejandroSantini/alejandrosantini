import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className={styles.container}>
      <h4>Contact Me</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="example@gmail.com" />
        <label>Message</label>
        <textarea name="message" placeholder="Please write your message here..." />
        <input type="submit" value={'Send'} />
      </form>
    </section>
  );
};

export default Contact;
