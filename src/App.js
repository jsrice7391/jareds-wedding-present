import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from "./pages/Home";

import './App.css';

export const App = () => {
  return (
    <Router>
      <div style={{margin: "1.5% 2.5%"}}>
        <nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </nav>
      </div>
    </Router>
  );
}

export default App;
