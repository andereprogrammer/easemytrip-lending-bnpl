import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ListOfFlights from "./pages/ListOfFlights";
import PaymentMethod from "./pages/PaymentMethod";
import { EMTProvider } from "./common/EMTContext";



function App() {
  return (
    <div className="App">
      <div id="loginmodal"></div>
      <div id='foraibot'></div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect push to={"/home"} />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/list-of-flights" component={PaymentMethod} />
          <Route path="/review">
              <ListOfFlights/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
