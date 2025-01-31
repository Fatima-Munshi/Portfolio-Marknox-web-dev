import styles from './FooterStyles.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="https://github.com/Fatima-Munshi/Portfolio-Marknox-web-dev" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/fatima-munshi-/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className={styles.text}>© 2025 Fatima Munshi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
