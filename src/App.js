import './App.css';
import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import NewUserPage from "./pages/NewUserPage/NewUserPage";
import DmOrPcPage from "./pages/DmOrPcPage/DmOrPcPage";

 
class App extends Component {  
  render() {    
    return (
      <div>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/newuser1" component={NewUserPage} />
              <Route exact path="/newuser2" component={DmOrPcPage} />
            </Switch>
          </Router>
        </div>

    );
  }
}

export default App;