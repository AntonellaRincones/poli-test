import React from 'react';
import LoginForm from "../forms/LoginForm.js"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth.js';

class LoginPage extends React.Component {

	submit = data => this.props.login(data).then(() => this.props.history.push("/"));


	render() {
		return (
			
			<div>
				<h1>Login page </h1>

				<LoginForm submit={this.submit} />
			</div>
			
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginPage);