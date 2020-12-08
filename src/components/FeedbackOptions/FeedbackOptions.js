import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
const { Fragment } = require('react');

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Fragment>
    {options.map(option => {
      const arrClasses = [s.button];
      if (option === 'good') {
        arrClasses.push(s.button_good);
      }
      if (option === 'bad') {
        arrClasses.push(s.button_bad);
      }
      return (
        <button
          className={arrClasses.join(' ')}
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      );
    })}
  </Fragment>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
