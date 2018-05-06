import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import NotFound from '../components/NotFound';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
import EditBook from '../components/EditBook';
import AddNote from '../components/AddNote';
import MostRecentNote from '../components/MostRecentNote'
import ViewNotes from '../components/ViewNotes';
import EditNote from '../components/EditNote';



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

  <Route component={NotFound} />
  </Switch>
  </div>
  </BrowserRouter>
)


export default AppRouter;
