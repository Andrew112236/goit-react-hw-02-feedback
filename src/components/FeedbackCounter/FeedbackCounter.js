import React from 'react';

function FeedbackCounter(props) {
  const { feedback, handleButtonClick } = props;

  return (
    <div>
      {/* Remain the state */}
      <button onClick={() => handleButtonClick('good')}>Good</button>
      <button onClick={() => handleButtonClick('neutral')}>Neutral</button>
      <button onClick={() => handleButtonClick('bad')}>Bad</button>

      <div>
        {/* Total number of states */}
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
      </div>
    </div>
  );
}

export default FeedbackCounter;
