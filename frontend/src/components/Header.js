// components/Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.head}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Destination page</h1>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Doctors</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
