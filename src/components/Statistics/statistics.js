import React from 'react';
import styles from './Statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage, negativePercentage } =
    props;

  const renderStatistics = (label, value) => (
    <p className={styles.statistics_item}>
      <span className={styles.statistics_label}>{label}:</span>
      <span className={styles.statistics_value}>{value}</span>
    </p>
  );

  return (
    <div className={styles.statistics_container}>
      {renderStatistics('Good', good)}
      {renderStatistics('Neutral', neutral)}
      {renderStatistics('Bad', bad)}
      {renderStatistics('Total', total)}
      <p className={`${styles.statistics_item} ${styles.positive_feedback}`}>
        <span className={styles.statistics_label}>Positive Feedback:</span>
        <span className={styles.statistics_value}>
          {positivePercentage.toFixed(2)}%
        </span>
      </p>
      <p className={`${styles.statistics_item} ${styles.negative_feedback}`}>
        <span className={styles.statistics_label}>Negative Feedback:</span>
        <span className={styles.statistics_value}>
          {negativePercentage.toFixed(2)}%
        </span>
      </p>
    </div>
  );
}
export default Statistics;
