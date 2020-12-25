import React from "react";
import ReactDOM from "react-dom";

//HIGHER ORDER COMPONENT
//HOC :: A COMPONENT  (HOC) THAT RENDERS ANOTHER COMPONENT
//reuse code::
//render hijacking
//prop manipulation
//abstract state

const Info = (props) => (
	<div>
		<h1>info</h1>
		<p>this info is :{props.info} </p>
	</div>
);

//regular function
const withAdminWarning = () => {};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(
	<Info info="there are the details" />,
	document.getElementById("root")
);
