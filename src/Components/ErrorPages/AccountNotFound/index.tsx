import * as React from 'react';
import { Link } from 'react-router-dom';

import '../Error.css';

import { HttpStatusGuard } from '../../../Services/RouteGuards/HttpStatusGuard';

export interface Props { }

export const AccountNotFound = (props: Props) => {
	return (
		<div className="error-container">
			<div className="error-icon">
				<div className="error-icon-eyes"></div>
			</div>
			<p className="error-message">
				Sorry, we didn't find a any account with those credentials.
			</p>
			<Link className="retry text-center block margin-t-2" to="/login">TRY AGAIN</Link>
		</div>
	);
};

export default HttpStatusGuard(AccountNotFound);