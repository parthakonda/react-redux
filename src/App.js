import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, history } from 'react-router-dom';
import { ProtectedRoute } from './routes';
import { Login } from './layouts/login/login';
import { connect } from 'react-redux';
import BaseLayout from './layouts/base/base';
import { updateUser } from './actions';

class App extends Component {
	onUpdateUser = event => {
		this.props.onUpdateUser(event.target.value);
		console.log(this.props.user, 11);
	};
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Switch>
						<div>
							<input onChange={this.onUpdateUser} />
							{this.props.user}
							<ProtectedRoute path="/login" exact component={Login} />
							<ProtectedRoute path="/" component={BaseLayout} />
						</div>
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state => {
	return { products: state.products, user: state.user };
};

const matchActionsToProps = {
	onUpdateUser: updateUser
};

export default connect(
	mapStateToProps,
	matchActionsToProps
)(App);
