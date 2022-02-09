import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../Assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          className={styles.logo}
          to="/"
          aria-label="Twitch Dashboard - Home"
        >
          <Logo />
        </Link>
        <Link className={styles.login} to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
