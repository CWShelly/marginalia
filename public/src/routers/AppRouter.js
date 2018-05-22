import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import AddNote from '../components/AddNote';
import MostRecentNote from '../components/MostRecentNote';
import ViewNotes from '../components/ViewNotes';
import EditNote from '../components/EditNote';
import ViewChapters from '../components/ViewChapters';
import ViewParagraphs from '../components/ViewParagraphs';
import ViewPages from '../components/ViewPages';
import EditParagraph  from '../components/EditParagraph';
import EditPage from '../components/EditPage';
import EditChapter from '../components/EditChapter';
import LogIn  from '../components/LogIn';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ViewAllNotes from '../components/ViewAllNotes'
import ViewTags from '../components/ViewTags'

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
  <PrivateRoute path="/quickNote" component={MostRecentNote} />
  <PrivateRoute path="/edit/:id" component={EditBook} />
  <PrivateRoute path="/editNote/:id" component={EditNote} />
  <PrivateRoute path="/viewNotes/:title" component={ViewNotes} />
    <PrivateRoute path="/viewAllNotes/" component={ViewAllNotes} />
  <PrivateRoute path="/chapter/:title" component={ViewChapters} />
  <PrivateRoute path="/page/:chapter_number" component={ViewPages} />
  <PrivateRoute path="/paragraph/:paragraph_number" component={ViewParagraphs} />
  <PrivateRoute path="/editParagraph/:id" component={EditParagraph} />
  <PrivateRoute path="/editPage/:id" component={EditPage} />
  <PrivateRoute path="/editChapter/:id" component={EditChapter} />
    <PrivateRoute path="/viewTags/" component={ViewTags} />


  <Route component={NotFound} />
  </Switch>
  </div>
  </Router>
)


export default AppRouter;
