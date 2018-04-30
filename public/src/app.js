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

const visibleBooks = getVisibleBooks(state.books)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
