import React, {Component} from 'react';
import NewUserForm from './NewUserForm';
import UserList from './UserList';
import PrivacyModeSwitcher from './PrivacyModeSwitcher';
import ErrorMessage from './ErrorMessage';

export default class UserSection extends Component {
	state = {
    	userList: [],
      	privacyModeOn: false,
      	duplicateUserAttempt: false,
      	duplicateUserAttemptUserName: ''
    }
	
	onAddUser = ({firstName, lastName, userName, noOfGames}) => {
    	if (this.state.userList.some(user => user.userName === userName)) {
    		this.setState({duplicateUserAttempt: true, duplicateUserAttemptUserName: userName});
			return;
    	}
		
		this.setState((prevState) => ({
        	userList: prevState.userList.concat({firstName, lastName, userName, noOfGames}),
          	duplicateUserAttempt: false,
          	duplicateUserAttemptUserName: ''
        }));		
    };

	togglePrivacyMode = () => {
    	this.setState(prevState => ({
        	privacyModeOn: !prevState.privacyModeOn
        }));
    }
	
	render() {
      	const {userList, privacyModeOn, duplicateUserAttempt, duplicateUserAttemptUserName} = this.state;
      
    	return (
      		<div className="UserSection">
            	<NewUserForm onSubmitCallback={this.onAddUser} />
      			{
    				duplicateUserAttempt && <ErrorMessage message={`The username ${duplicateUserAttemptUserName} already exists`} />
    			}
				<PrivacyModeSwitcher privacyModeOn={privacyModeOn} switchCallback={this.togglePrivacyMode} />
             	<UserList users={userList} privacyModeOn={privacyModeOn} />
            </div>
      	);
    }
}