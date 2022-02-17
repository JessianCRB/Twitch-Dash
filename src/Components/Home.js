import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={`${styles.introBG} animeTop container`}>
      <div className={styles.homeWeapper}>
        <h1 className={styles.homeTitle}>
          <span>Lorem ipsum dolor sit amet</span>
        </h1>
        <p className={styles.homeText}>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className={styles.areaSeta}>
        <button className={styles.seta}>
          <svg role="img" className={styles.iconSeta}></svg>
        </button>
      </div>
    </section>
  );
};

export default Home;
