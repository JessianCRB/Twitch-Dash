import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as LogoDash } from '../Assets/logo.svg';
import { ReactComponent as Insta } from '../Assets/instagram.svg';
import { ReactComponent as Face } from '../Assets/facebook.svg';
import { ReactComponent as Twitter } from '../Assets/twitter.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <LogoDash />
      <p>Lorem Ipson © Alguns direitos reservados</p>
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
          {' '}
          <Insta />{' '}
        </a>
        <a target="_blank" rel="noreferrer" href="https://pt-br.facebook.com/">
          {' '}
          <Face />{' '}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/?lang=pt-br"
        >
          {' '}
          <Twitter />{' '}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
