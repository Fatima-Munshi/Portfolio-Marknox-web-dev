import styles from './AboutStyles.module.css';
import aboutImg from '../../assets/about-img.jpg';
import React, { useState, useEffect } from 'react';

function About() {
  const [transitionClass, setTransitionClass] = useState('fade-enter');

  useEffect(() => {
    setTransitionClass('fade-enter-active');
  }, []);

  return (
    <section className={`${styles.container} ${transitionClass}`}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.aboutImage} 
          src={aboutImg} 
          alt="About Me" 
        />
      </div>
      <div className={styles.info}>
        <h1>About Me</h1>
        <p className={styles.description}>
          Hello! I'm Fatima Munshi, a dedicated Web Developer with a passion for creating exceptional web applications. My journey in web development began with a curiosity about how websites work and evolved into a full-fledged career. I enjoy the process of turning ideas into reality using code.
        </p>
        <p className={styles.description}>
          I specialize in creating responsive and interactive web applications using the latest technologies. When I'm not coding, you can find me exploring new tech trends and reading about design.
        </p>
      </div>
    </section>
  );
}

export default About;