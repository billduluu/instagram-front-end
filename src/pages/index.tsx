import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TimeLine from "./timeline-page/timeline";
import ProfilePage from "./profile-page/profile";
import { SignUp, SignIn } from "./auth-page/index";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <SignIn />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUp />
        </Route>
        <Route path="/profile" exact={true}>
          <ProfilePage />
        </Route>
        <Route path="/" exact={true}>
          <TimeLine />
        </Route>
      </Switch>
    </Router>
  );
}
