import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addBook } from './actions/books';
import { addNote} from './actions/notes';
import configureStore from './store/configureStore';
import getVisibleBooks from './selectors/books';
import getVisibleNotes from './selectors/notes'
import AppRouter from './routers/AppRouter';


const store = configureStore();
store.dispatch(addBook(
  {author_last_name: 'Highsmith',
  author_first_name: 'Patricia',
   title: 'Ripley Underground',
    createdAt:10000}))


const state = store.getState();

const visibleBooks = getVisibleBooks(state.books)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
