import styles from './HomeStyles.module.css';
import homeImg from '../../assets/home-img.jpg';
import CV from '../../assets/Fatima_Munshi_MCA_Resume.pdf';
import React, { useState, useEffect } from 'react';

function Home() {
  const [transitionClass, setTransitionClass] = useState('fade-enter');

  useEffect(() => {
    setTransitionClass('fade-enter-active');
  }, []);
  return (
    <section className={`${styles.container} ${transitionClass}`}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.home} 
        src={homeImg} 
        alt="Profile picture of Me" />
      </div>
      <div className={styles.info}>
        <h1>Fatima Munshi</h1>
        <h2>Web Developer</h2>
        <br />
        <p className={styles.description}>With a passion for developing unique web apps</p>
        <a href={CV}>
          <button className='hover' download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Home;