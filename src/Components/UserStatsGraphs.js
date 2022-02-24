import React, { useState, useEffect } from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const graphicColor = ['#388087', '#6fb3b8', '#badfe7']; // Colors
const wantedGraphicData = [
  {
    x: 'Hayashii',
    y: 7,
  },
  {
    x: 'Gaules',
    y: 6,
  },
  {
    x: 'Alanzoka',
    y: 6,
  },
]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }];

const UserStatsGraphs = () => {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.graphItem}>
        <span style={{ color: '#6441A5' }}>Viewers:</span>
        <VictoryChart
          padding={{ top: 100, bottom: 100, left: 100, right: 100 }}
          height={500}
          width={500}
        >
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
                x: 'Hayashii',
                y: 7,
              },
              {
                x: 'Gaulês',
                y: 6,
              },
              {
                x: 'Alanzoka',
                y: 6,
              },
            ]}
          />
        </VictoryChart>
      </div>
      <div className={styles.graphItem}>
        <span style={{ color: '#6441A5' }}>Horas assistidas:</span>
        <VictoryPie
          padding={{ top: 85, bottom: 85, left: 85, right: 85 }}
          animate={{ easing: 'exp' }}
          data={graphicData}
          width={400}
          height={400}
          colorScale={graphicColor}
          innerRadius={50}
        />
      </div>
    </section>
  );
};

export default UserStatsGraphs;
