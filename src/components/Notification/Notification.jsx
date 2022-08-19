import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return message && <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
