import React from 'react';
import PropTypes from 'prop-types';

import '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div className="feedbackBtn">
      {options.map(key => {
        return (
          <button key={key} type="button" onClick={() => onBtnClick(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
