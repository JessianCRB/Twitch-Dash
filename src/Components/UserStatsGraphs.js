import React, { useState, useEffect } from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const graphicColor = [
  '#ffbce7',
  '#fa2d4d',
  '#a8008d',
  '#ec6f00',
  '#ffef65',
  '#000000',
  '#5b74fb',
  '#76e0fb',
  '#519404',
];
const wantedGraphicData = [
  {
    x: 'Maethe',
    y: 108,
  },
  {
    x: 'JuMayumin',
    y: 10.9,
  },
  {
    x: 'Bagi',
    y: 136,
  },
  {
    x: 'Hayashii',
    y: 134,
  },
  {
    x: 'Yoda',
    y: 238,
  },
  {
    x: 'Alanzoka',
    y: 146,
  },
  {
    x: 'Gaules',
    y: 712,
  },
  {
    x: 'Loud_Coringa',
    y: 134,
  },
  {
    x: 'Casimito',
    y: 140,
  },
];
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }];

const UserStatsGraphs = () => {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData);
  }, []);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.graphItem}>
        <span style={{ color: '#6441A5' }}>Viewers média:</span>
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
                x: 'Maethe',
                y: 490,
              },
              {
                x: 'JuMayumin',
                y: 974,
              },
              {
                x: 'Bagi',
                y: 1490,
              },
              {
                x: 'Hayashii',
                y: 3329,
              },
              {
                x: 'Yoda',
                y: 13761,
              },
              {
                x: 'Alanzoka',
                y: 20835,
              },
              {
                x: 'Gaules',
                y: 20947,
              },
              {
                x: 'Loud_Coringa',
                y: 43287,
              },
              {
                x: 'Casimito',
                y: 43628,
              },
            ]}
          />
        </VictoryChart>
      </div>
      <div className={styles.graphItem}>
        <span style={{ color: '#6441A5' }}>Horas Transmitidas Mensal:</span>
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
