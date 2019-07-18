import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import auth from "./utils/auth";
import Tried from "./pages/tried";
import Nav from "./components/Nav";
import "./App.css";
import {withRouter} from "react-router"
const HeaderWithRouter = withRouter(Nav);

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    auth: auth,
    currentMap: "world map",
    showSearch: false,
    showYelp: false

  };
}

  render() {
    
    return (
      <div>
        <Router>
          <Fragment>
          <HeaderWithRouter />
            <Switch>
              <PrivateRoute exact path="/" component={Search} auth={this.state.auth} currentMap={this.state.currentMap}  userName={this.state.auth.userName} searchClick={this.onSearchClick}/>
              <PrivateRoute exact path="/saved" component={Saved} auth={this.state.auth} userName={this.state.auth.userName} />
              <PrivateRoute exact path="/tried" component={Tried} auth={this.state.auth} userName={this.state.auth.userName} />
              <Route exact path="/login" 
                           render={(props) => <Login {...props} auth={this.state.auth} />} />
              <Route exact path="/signup" render={(props) => <SignUp {...props} auth={this.state.auth} />}
                   />
            </Switch>
          </Fragment>
        </Router>
       
      </div>
    );
  }
}

export default App;
