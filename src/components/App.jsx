import React, { useState } from 'react';
import Statistics from './Statistics/statistics.js';

const App = () => {
  // Definirea stării folosind useState
  const [feedback, setFeedback] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  // Calculul totalului și procentajului pozitiv
  const totalFeedback = feedback.Good + feedback.Neutral + feedback.Bad;
  const positivePercentage =
    totalFeedback > 0 ? (feedback.Good / totalFeedback) * 100 : 0;

  return (
    <div>
      <Statistics
        good={feedback.Good}
        neutral={feedback.Neutral}
        bad={feedback.Bad}
        total={totalFeedback}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

export default App;
