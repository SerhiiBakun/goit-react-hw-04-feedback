import PropTypes from 'prop-types';
import { Button, ButtonWraper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options).map(option => {
    return option.charAt(0).toUpperCase() + option.slice(1);
  });

  return (
    <ButtonWraper>
      {optionNames.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonWraper>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
