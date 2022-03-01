import React from 'react';
import styles from './Streamers.module.css';
import Head from './Head';
import { ReactComponent as Coracao } from '../Assets/coração.svg';
import { ReactComponent as Mao } from '../Assets/mão.svg';

const Streamers = () => {
  return (
    <div
      className="container animeTop"
      style={{ paddingTop: '95px', paddingBottom: '95px' }}
    >
      <Head
        title="Streamers"
        descriptiion="Cards dos streamers com a sua respectiva quantidade de followers e se é parceiro ou afiliado."
      />

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
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/1cce6c41-aaf8-44c2-ad1b-ef76fb0eede3-profile_image-300x300.png"
              alt="Yoda"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/yoda?lang=pt-br"
          >
            Yoda
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              2,25M
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-300x300.png"
              alt="Gaules"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/gaules?lang=pt-br"
          >
            Gaules
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              3,3M
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-300x300.png"
              alt="Casimiro"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/casimito?lang=pt-br"
          >
            Casimito
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              1,97M
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/da80c83c-88f3-4c02-8768-b38ee70882f4-profile_image-300x300.png"
              alt="JuMayumin"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/jumayumin?lang=pt-br"
          >
            JuMayumin
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              436,9k
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-300x300.png"
              alt="Alanzoka"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/alanzoka?lang=pt-br"
          >
            Alanzoka
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              5,55M
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/762a31e8-9829-4957-8073-dd85d67ad576-profile_image-300x300.png"
              alt="Bagi"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/bagi?lang=pt"
          >
            Bagi
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              627k
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/4c8846c2-2fad-4276-8004-070700d316aa-profile_image-300x300.png"
              alt="Maethe"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/maethe?lang=pt-br"
          >
            Maethe
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              401k
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
          <div className={styles.avatar}>
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/371a4ddd-c4ef-418c-9f42-cfecda78187d-profile_image-300x300.png"
              alt="Loud Coringa"
            />
          </div>
          <a
            className={styles.name}
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/loud_coringa?lang=pt-br"
          >
            Loud_Coringa
          </a>
          <div className={styles.info}>
            <svg className={`${styles.svg1} ${styles.svg2}`} role="img">
              <Coracao />
            </svg>
            <div className={styles.infoValor} style={{ textAlign: 'center' }}>
              2,9M
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
      </div>
    </div>
  );
};

export default Streamers;
