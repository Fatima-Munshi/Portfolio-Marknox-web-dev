import React, { useState, useEffect} from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
    const [transitionClass, setTransitionClass] = useState('fade-enter');
    useEffect(() => {
        setTransitionClass('fade-enter-active');
      }, []);
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending the data to your backend server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className={`${styles.container} ${transitionClass}`}>
      <div className={styles.overlay}>
        <h1>Contact Me</h1>
        <p className={styles.description}>
          Feel free to reach out if you have any questions or opportunities!
        </p>
        {isSubmitted ? (
          <p className={styles.thankYouMessage}>Thank you for your message!</p>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
