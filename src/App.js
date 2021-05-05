import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RedirectPage from "./components/RedirectPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/spotify/redirect" component={RedirectPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
