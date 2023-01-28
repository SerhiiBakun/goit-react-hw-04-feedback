import { useState } from 'react';
import { GlobalStyles } from 'components/GlobalStyles';
import { Box } from 'components/Box';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option.toLowerCase()) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const options = { good, neutral, bad };
  const total = Object.values(options).reduce((acc, val) => acc + val, 0);
  const positivePercentage = Math.round((good / total) * 100);
  const optionNames = Object.keys(options).map(option => {
    return option.charAt(0).toUpperCase() + option.slice(1);
  });

  return (
    <Box ml={[4]}>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionNames}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};
