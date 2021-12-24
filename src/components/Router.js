import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import  {Home, About, Contact, ListYourProperty, ManageProperty }  from "../pages";


const Router = (props) => (

  <Switch>
    <Redirect from="/" to='/home' />
    <Route path='/home' component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/manageyourproperty" component={ManageProperty} />
    <Route path="/listyourproperty" component={ListYourProperty} />
  </Switch>
);

export default Router;