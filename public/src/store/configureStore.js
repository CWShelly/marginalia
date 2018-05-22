import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from '../reducers/books';
import notesReducer from '../reducers/notes';
// import chaptersReducer from '../reducers/chapters';
// import pagesReducer from '../reducers/pages';
// import paragraphsReducer from '../reducers/paragraphs';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
// import tagsReducer from '../reducers/tags';
const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      notes: notesReducer,
      // chapters: chaptersReducer,
      // pages: pagesReducer,
      // paragraphs: paragraphsReducer,
      auth: authReducer,
      filters: filtersReducer,
      // tags: tagsReducer

    }),
    composeEnhanchers(applyMiddleware(thunk))
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
