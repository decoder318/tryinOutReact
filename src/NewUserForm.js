import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewUserForm extends Component {
  state = {
    firstName: '',
    lastName: '',
  	userName: '',
    noOfGames: 0
  };
  
  onAddUser = (e) => {
  	e.preventDefault();
    
    const {firstName, lastName, userName, noOfGames} = this.state;
    this.props.onSubmitCallback({firstName, lastName, userName, noOfGames});
    
    this.setState({
    	firstName: '',
    	lastName: '',
  		userName: '',
    	noOfGames: 0
    });
  }
  
  render() {
    const {firstName, lastName, userName, noOfGames} = this.state;
    
  	return (
    	<form onSubmit={this.onAddUser.bind(this)}>
			<table>
				<tbody>
					<tr>
                      <td>
                          First Name:
                      </td>
                      <td>
                          <input type="text" value={firstName} onChange={(e) => this.setState({firstName: e.target.value})} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Last Name:
                      </td>
                      <td>
                          <input type="text" value={lastName} onChange={(e) => this.setState({lastName: e.target.value})} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Username:
                      </td>
                      <td>
                          <input type="text" value={userName} onChange={(e) => this.setState({userName: e.target.value})} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          Number of games played:
                      </td>
                      <td>
                          <input type="number" value={noOfGames} onChange={(e) => this.setState({noOfGames: e.target.value})} readOnly="readonly" />
                      </td>
                  </tr>
				</tbody>
			</table>
			<button type="submit" disabled={!firstName.trim() || !lastName.trim() || !userName.trim()}>Add</button>
		</form>
    );
  }
}

NewUserForm.propTypes = {
	onSubmitCallback: PropTypes.func.isRequired
}

export default NewUserForm;