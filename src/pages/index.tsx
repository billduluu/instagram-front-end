import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TimeLine from "./timeline-page/timeline";
import ProfilePage from "./profile-page/profile";
import { SignUp, SignIn } from "./auth-page/index";
import { Header } from "../components/index";
import Messenger from "./direct-message/messenger";
import Explore from "./explore/explore";

export default function App() {
  return (
    <Router>
      <Header />
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
        <Route path="/timeline" exact={false}>
          <TimeLine />
        </Route>
        <Route path="/explore" exact={false}>
          <Explore />
        </Route>
        <Route path="/direct" exact={false}>
          <Messenger />
        </Route>
      </Switch>
    </Router>
  );
}
