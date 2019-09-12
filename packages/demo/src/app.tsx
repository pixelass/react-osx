import React from "react";
import {hot} from "react-hot-loader/root";
import {Route, Switch} from "react-router";
import {routes} from "./routes";
import {NotFound} from "./pages";

const AppContent = () => (
	<Switch>
		{routes.map(({component, location}) => (
			<Route key={location} exact={true} path={location} component={component} />
		))}
		<Route component={NotFound} />
	</Switch>
);
export const App = hot(AppContent);
