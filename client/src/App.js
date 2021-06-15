import "./Dark-Theme.css";
import "./Light-Theme.css";
import "./Generic.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BaseScreen from "./screens/BaseScreen";
import Mint from "./screens/Mint";
import Compose from "./screens/Compose";
import Connect from "./screens/Connect";
import Account from "./screens/Account";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={BaseScreen} />
				<Route path="/mint" component={Mint} />
				<Route path="/connect" component={Connect} />
				<Route path="/account" exact component={Account} />
				<Route path="/account/:address" component={Account} />
				<Route path="/compose" component={Compose} />
				<Route path="/case" component={BaseScreen} />
				<Route path="/settings" component={BaseScreen} />
			</Switch>
		</Router>
	);
}

export default App;
