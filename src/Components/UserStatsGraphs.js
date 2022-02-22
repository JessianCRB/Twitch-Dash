import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = () => {
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar
            alignment="start"
            data={[
              {
                x: 'teste',
                y: 100,
              },
              {
                x: 'teste2',
                y: 6,
              },
            ]}
          ></VictoryBar>
        </VictoryChart>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          padding={{ top: 20, bottom: 20, left: 80, left: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#6441A5',
            },
          }}
          innerRadius={50}
          data={[
            {
              x: 'teste',
              y: 100,
            },
            {
              x: 'teste2',
              y: 6,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default UserStatsGraphs;
