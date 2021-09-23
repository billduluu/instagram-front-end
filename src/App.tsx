import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TimeLine from "./pages/timeline-page/timeline";
import ProfilePage from "./pages/profile-page/profile";
import SignIn from "./pages/auth-page/sign-in";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <SignIn />
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
