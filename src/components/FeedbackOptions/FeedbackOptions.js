import PropTypes from 'prop-types';
const { Fragment } = require('react');

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Fragment>
    {options.map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </Fragment>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
