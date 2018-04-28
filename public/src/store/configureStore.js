import { createStore, combineReducers } from 'redux';
import booksReducer from '../reducers/books';
import notesReducer from '../reducers/notes'


export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      notes: notesReducer

    }),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
