import './App.css';
import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./pages/LoginPage/LoginPage.jsx";
import NewUserForm from "./pages/NewUserPage/NewUserPage";

 
class App extends Component {  
  render() {    
    return (
      <div>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginForm} />
              <Route exact path="/newuser" component={NewUserForm} />
            </Switch>
          </Router>
        </div>

    );
  }
}

export default App;