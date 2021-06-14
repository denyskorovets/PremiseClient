import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import MovieDetails from "./MovieDetails";
import Search from "./Search";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/details/:movieId" component={MovieDetails} />
    </Switch>
  );
};

export default Pages;
