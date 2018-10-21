import React from 'react';
import PropTypes from 'prop-types';

const PrivacyModeSwitcher = ({privacyModeOn, switchCallback}) => {
	return (<button type="button" onClick={switchCallback}>{ privacyModeOn ? 'Turn privacy off' : 'Turn privacy on' }</button>);
};

PrivacyModeSwitcher.propTypes = {
  	privacyModeOn: PropTypes.bool,
	switchCallback: PropTypes.func.isRequired
}

export default PrivacyModeSwitcher;