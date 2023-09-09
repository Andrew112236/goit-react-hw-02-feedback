import React, { useState } from 'react';
import Statistics from './Statistics/statistics.js';
import FeedbackCounter from './FeedbackCounter/FeedbackCounter.js';

function App() {
  // Initial state values
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // handleEvent buttons
  const handleButtonClick = category => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [category]: prevFeedback[category] + 1,
    }));
  };

  // Math values
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = (feedback.good / total) * 100 || 0;
  const negativePercentage = (feedback.bad / total) * 100 || 0;

  return (
    <div>
      <FeedbackCounter
        feedback={feedback}
        handleButtonClick={handleButtonClick}
      />

      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={total}
        positivePercentage={positivePercentage}
        negativePercentage={negativePercentage}
      />
    </div>
  );
}

export default App;
