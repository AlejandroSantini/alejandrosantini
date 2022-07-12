import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

const Contact = () => {
  const initialValues = { user_name: '', user_email: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm('service_k5ahq4d', 'template_d0wd0aj', form.current, '-uEa-sDUJesze0iOi')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormValues(initialValues);
      alert('Message sent successfully');
    }
  }, [isSubmit]);

  const validate = (values) => {
    const errors = {};
    if (!values.user_name) {
      errors.user_name = 'Name is required';
    }
    if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.user_email)) {
      errors.user_email = 'It is not a valid email address';
    }
    if (!values.user_email) {
      errors.user_email = 'Email is required';
    }
    if (!values.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
    <section id="contact" className={styles.container}>
      <h4>Contact Me</h4>
      <form ref={form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="FullName"
          value={formValues.user_name}
          onChange={handleChange}
        />
        <p>{formErrors.user_name}</p>
        <label>Email</label>
        <input
          type="text"
          name="user_email"
          placeholder="example@gmail.com"
          value={formValues.user_email}
          onChange={handleChange}
        />
        <p>{formErrors.user_email}</p>
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Please write your message here..."
          value={formValues.message}
          onChange={handleChange}
        />
        <p>{formErrors.message}</p>
        <input type="submit" value={'Send'} />
      </form>
    </section>
  );
};

export default Contact;
