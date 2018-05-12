import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
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

export const history = createHistory();

const AppRouter = ()=>(
  <Router history={history}>

  <div>
   <Header />

  <Switch>
  <Route path="/" component={LogIn} exact={true} />
    <Route path="/dashboard" component={Dashboard} />
  <Route path="/addbook" component={AddBook} />
  <Route path="/addnote" component={AddNote} />
  <Route path="/quickNote" component={MostRecentNote} />
  <Route path="/edit/:id" component={EditBook} />
  <Route path="/editNote/:id" component={EditNote} />
  <Route path="/viewNotes/:title" component={ViewNotes} />
  <Route path="/chapter/:title" component={ViewChapters} />
  <Route path="/page/:chapter_number" component={ViewPages} />
  <Route path="/paragraph/:paragraph_number" component={ViewParagraphs} />
  <Route path="/editParagraph/:id" component={EditParagraph} />
  <Route path="/editPage/:id" component={EditPage} />
    <Route path="/editChapter/:id" component={EditChapter} />

  <Route component={NotFound} />
  </Switch>
  </div>
  </Router>
)


export default AppRouter;
