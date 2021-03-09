import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.item}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/segersniels"
      >
        <p className={styles.icon}>
          <FaGithub />
        </p>
      </a>

      <a
        className={styles.item}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/nielssegers/"
      >
        <p className={styles.icon}>
          <FaLinkedin />
        </p>
      </a>
    </div>
  );
};

export default Header;
