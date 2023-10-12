import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Dashboard/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/Login";
import DisclaimerModal from "./Components/DisclaimerModal";
import ForgotPassword from "./Components/ForgotPassword";


function App() {
  return (
    <div>
      
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/disclaimer" component={DisclaimerModal} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
