import React from 'react';
import styles from './Streamers.module.css';
import { ReactComponent as Coracao } from '../Assets/coração.svg';
import { ReactComponent as Mao } from '../Assets/mão.svg';

const Streamers = () => {
  return (
    <div className="container" style={{ paddingTop: '95px' }}>
      <div className={styles.streamersGrid}>
        <div className={styles.cardsStream}>
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/d67c0674-ba7c-49b4-949e-787da0542b9f-profile_image-300x300.png"
              alt="Hayashii"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/hayashii?lang=pt-br"
          >
            Hayashii
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div style={{ textAlign: 'center', marginRight: '12px' }}>
              355.25k
            </div>
            <div className={styles.info2}>
              <svg
                className={`${styles.svg1} ${styles.svg2}`}
                style={{ maxWidth: '14px' }}
                role="img"
              >
                <Mao />
              </svg>
              <div style={{ textAlign: 'center' }}>Partner</div>
            </div>
          </div>
        </div>

        <div className={styles.cardsStream}>
          <div className={styles.avatar}>avatar aqui 2</div>
          <div className={styles.name}>nome aqui 2</div>
          <div className={styles.info}>informações aqui 2</div>
        </div>

        <div className={styles.cardsStream}>
          <div className={styles.avatar}>avatar aqui 3</div>
          <div className={styles.name}>nome aqui 3</div>
          <div className={styles.info}>informações aqui 3</div>
        </div>

        <div className={styles.cardsStream}>
          <div className={styles.avatar}>avatar aqui 4</div>
          <div className={styles.name}>nome aqui 4</div>
          <div className={styles.info}>informações aqui 4</div>
        </div>
      </div>
    </div>
  );
};

export default Streamers;
