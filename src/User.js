import React from 'react';
import PropTypes from 'prop-types';
import UserPropType from './UserPropType';

const User = ({user, privacyModeOn}) => {
	return (
      <p>
      	{!privacyModeOn && `${user.userName} (${user.firstName} ${user.lastName}) has played ${user.noOfGames} games.`}
		{privacyModeOn && `${user.userName} has played ** games.`}
      </p>
    );
};

User.propTypes = {
	user: UserPropType.isRequired,
	privacyModeOn: PropTypes.bool
}

export default User;