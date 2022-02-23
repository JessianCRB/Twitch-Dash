import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = () => {
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.graphItem}>
        <VictoryChart domainPadding={{ x: 20 }}>
          <VictoryBar
            horizontal
            alignment="start"
            animate={{
              duration: 2000,
              onLoad: {
                duration: 1000,
              },
            }}
            style={{
              data: {
                fill: '#6441A5',
              },
            }}
            data={[
              {
                x: '1',
                y: 100,
              },
              {
                x: '2',
                y: 6,
              },
            ]}
          />
        </VictoryChart>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={[
            {
              x: 'teste',
              y: 100,
            },
            {
              x: 'teste2',
              y: 6,
            },
            {
              x: 'teste3',
              y: 25,
            },
            {
              x: 'teste4',
              y: 13,
            },
            {
              x: 'teste5',
              y: 98,
            },
          ]}
          animate={{ easing: 'exp' }}
          width={250}
          height={250}
          innerRadius={50}
        />
      </div>
    </section>
  );
};

export default UserStatsGraphs;
