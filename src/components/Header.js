import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<div>
		<h1>Expensify Home</h1>
		<NavLink to="/" activeClassName="is-active" exact>
			home
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			create
		</NavLink>
		<NavLink to="/edit" activeClassName="is-active">
			edit
		</NavLink>
		<NavLink to="/help" activeClassName="is-active">
			help
		</NavLink>
	</div>
);

export default Header;
