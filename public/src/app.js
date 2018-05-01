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



const state = store.getState();
//
store.dispatch(addBook({
  author_last_name: 'Highsmith',
  author_first_name: 'Patricia',
  title: 'Ripley Under Water',
  createdAt: 1000,

}))

store.dispatch(addBook({
  author_last_name: 'Twain',
  author_first_name: 'Mark',
  title: 'Huck Finn',
  createdAt: 1500,

}))
const visibleBooks = getVisibleBooks(state.books)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
