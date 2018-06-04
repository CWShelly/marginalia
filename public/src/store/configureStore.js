import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from '../reducers/books';
import notesReducer from '../reducers/notes';

import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
import summaryReducer from '../reducers/chapterSummary';
import profilesReducer from '../reducers/profiles';
const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      notes: notesReducer,
      summaries: summaryReducer,
      profiles: profilesReducer, 
      auth: authReducer,
      filters: filtersReducer,


    }),
    composeEnhanchers(applyMiddleware(thunk))
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
