import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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


const AppRouter = ()=>(
  <BrowserRouter>

  <div>
   <Header />

  <Switch>
  <Route path="/" component={Dashboard} exact={true} />
  <Route path="/addbook" component={AddBook} />
  <Route path="/addnote" component={AddNote} />
  <Route path="/quickNote" component={MostRecentNote} />
  <Route path="/edit/:id" component={EditBook} />
  <Route path="/editNote/:id" component={EditNote} />
  <Route path="/viewNotes/:title" component={ViewNotes} />
  <Route path="/chapter/:title" component={ViewChapters} />
  <Route path="/page/:chapter_number" component={ViewPages} />
  <Route path="/paragraph/:paragraph_number" component={ViewParagraphs} />

  <Route component={NotFound} />
  </Switch>
  </div>
  </BrowserRouter>
)


export default AppRouter;
