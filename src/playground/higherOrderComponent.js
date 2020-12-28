import React from "react";
import ReactDOM from "react-dom";

//HIGHER ORDER COMPONENT
//HOC :: A COMPONENT  (HOC) THAT RENDERS ANOTHER COMPONENT
//reuse code::
//render hijacking
//prop manipulation
//abstract state

//regular component
const Info = (props) => (
	<div>
		<h1>info</h1>
		<p>this info is :{props.info} </p>
	</div>
);

//regular function
const withAdminWarning = (WrappedComponent) => {
	//this is a anonymous stateless functional component
	return (props) => (
		<div>
			{props.isAdmin && <p>this is private info please don't share</p>}
			<WrappedComponent {...props} />
		</div>
	);
};
const requiredAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.authenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>please login to view info</p>
			)}
		</div>
	);
};
//AdminInfo if anonymous stateless functional component
//which gets returned from regular function (withAdminWarning)
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);
// ReactDOM.render(
// 	<AdminInfo isAdmin={true} info="there are the details" />,
// 	document.getElementById("root")
// );

ReactDOM.render(
	<AuthInfo authenticated={true} info="there are the details" />,
	document.getElementById("root")
);
