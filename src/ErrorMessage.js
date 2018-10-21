import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({message}) => {
	return (<p className="error">{ message }</p>);
};

ErrorMessage.propTypes = {
	message: PropTypes.string
}

export default ErrorMessage;