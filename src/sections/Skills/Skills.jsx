import styles from './SkillsStyles.module.css';
import React, { useState, useEffect } from 'react';

function Skills() {
  const [transitionClass, setTransitionClass] = useState('fade-enter');

  useEffect(() => {
    setTransitionClass('fade-enter-active');
  }, []);

  return (
    <section className={`${styles.container} ${transitionClass}`}>
      <h1>Skills</h1>
      <div className={styles.skillsGrid}>
        <div className={styles.card}>
          <h3>HTML & CSS</h3>
          <p>Building responsive and accessible websites.</p>
        </div>
        <div className={styles.card}>
          <h3>JavaScript</h3>
          <p>Creating dynamic and interactive web applications.</p>
        </div>
        <div className={styles.card}>
          <h3>React.js</h3>
          <p>Developing modern, efficient, and scalable UI components.</p>
        </div>
        <div className={styles.card}>
          <h3>Java</h3>
          <p>Robust and versatile programming language, ideal for building cross-platform applications and enterprise-level systems.</p>
        </div>
        <div className={styles.card}>
          <h3>Responsive Design</h3>
          <p>Ensuring websites work on all devices and screen sizes.</p>
        </div>
        <div className={styles.card}>
          <h3>MySQL</h3>
          <p>Powerful relational database management system for managing and organizing structured data in web applications.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;