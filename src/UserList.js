import React from 'react';
import User from './User';
import PropTypes from 'prop-types';
import UserPropType from './UserPropType';

const UserList = ({users, privacyModeOn}) => {
	return (
        <ul className="UserList">
        {
        	users.map(user => (
        		<li key={user.userName}>
					<User user={user} privacyModeOn={privacyModeOn} />
				</li>
  			))
        }
        </ul>
  	);
}

UserList.propTypes = {
	users: PropTypes.arrayOf(UserPropType).isRequired,
  	privacyModeOn: PropTypes.bool
};

export default UserList;