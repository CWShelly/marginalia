import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import AddBook from '../components/AddBook';
import Header from '../components/Header'
import EditBook from '../components/EditBook';
import AddNote from '../components/AddNote';

const AppRouter = ()=>(
  <BrowserRouter>

  <div>
   <Header />

  <Switch>
  <Route path="/" component={Dashboard} exact={true} />
  <Route path="/addbook" component={AddBook} />
  <Route path="/edit/:id" component={EditBook} />
    <Route path="/addNote/:id" component={AddNote} />
  <Route component={NotFound} />
  </Switch>
  </div>
  </BrowserRouter>
)


export default AppRouter;
