import React, { useRef } from 'react';
import styles from './Home.module.css';
import UserStatsGraphs from './UserStatsGraphs';

const Home = () => {
  const titleRef = useRef();

  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <section className={`${styles.introBG} animeTop container`}>
        <div className={styles.homeWeapper}>
          <h1 className={styles.homeTitle}>
            <span>Lorem ipsum dolor sit amet</span>
          </h1>
          <p className={styles.homeText}>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className={styles.areaSeta}>
          <button onClick={handleClick} className={styles.seta}>
            <svg role="img" className={styles.iconSeta}></svg>
          </button>
        </div>
      </section>

      <section className={`${styles.streamersBG} animeTop`}>
        <div className={`${styles.streamersInfo} dashContainer`}>
          <div className={styles.imagem}></div>
          <div className={styles.conteudo}>
            <h2
              style={{
                color: 'white',
                marginBottom: '83px',
                lineHeight: '1',
                fontSize: '32px',
              }}
            >
              Excepteur sint occaecat cupidatat non proident.
            </h2>
            <p style={{ color: 'white', fontSize: '17px' }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </p>
            <svg role="img" className={styles.setaCont}></svg>
          </div>
        </div>
      </section>

      <section>
        <div className={`${styles.graficosBG}`}>
          <div className={`${styles.homeWeapper}  dashContainer`}>
            <h1 ref={titleRef} className={styles.homeTitle}>
              <span>Lorem ipsum dolor sit amet</span>
            </h1>
            <p className={styles.homeText}>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="container">
            <UserStatsGraphs />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
