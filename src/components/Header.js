import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<div>
		<h1>Expensify Home</h1>
		<NavLink to="/" activeClassName="is-active" exact>
			Dashboard
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create_expense
		</NavLink>
		<NavLink to="/help" activeClassName="is-active">
			help
		</NavLink>
	</div>
);

export default Header;
