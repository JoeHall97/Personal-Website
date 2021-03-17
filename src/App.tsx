import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Route exact={true} path="/" component={AboutMe} />
					<Route exact={true} path="/ContactMe" component={ContactMe} />
					<Route exact={true} path="/Projects" component={Projects} />
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
