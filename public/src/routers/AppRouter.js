import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import AddNote from '../components/AddNote';
import ViewNotes from '../components/ViewNotes';
import EditNote from '../components/EditNote';
import LogIn  from '../components/LogIn';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ViewAllNotes from '../components/ViewAllNotes';
import ViewChapterSummaryPage from '../components/ViewChapterSummaryPage';
import Explainer from '../components/Explainer';

export const history = createHistory();

const AppRouter = ()=>(
  <Router history={history}>

  <div>


  <Switch>
    <PublicRoute path="/" component={LogIn} exact={true} />
    <PublicRoute path="/about" component={Explainer} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/addbook" component={AddBook} />
    <PrivateRoute path="/addnote" component={AddNote} />
    <PrivateRoute path="/viewNotes/:title" component={ViewNotes} />
    <PrivateRoute path="/viewAllNotes/" component={ViewAllNotes} />

    <PrivateRoute path="/viewSummaries/:title" component={ViewChapterSummaryPage} />
    <PrivateRoute path="/edit/:id" component={EditBook} />
    <PrivateRoute path="/editNote/:id" component={EditNote} />

  <Route component={NotFound} />
  </Switch>
  </div>
  </Router>
)


export default AppRouter;
