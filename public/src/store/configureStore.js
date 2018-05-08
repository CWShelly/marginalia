import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import booksReducer from '../reducers/books';
import notesReducer from '../reducers/notes';
import chaptersReducer from '../reducers/chapters';
import pagesReducer from '../reducers/pages';
import paragraphsReducer from '../reducers/paragraphs';
import thunk from 'redux-thunk';
const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


export default () => {
  const store = createStore(
    combineReducers({
      books: booksReducer,
      notes: notesReducer,
      chapters: chaptersReducer,
      pages: pagesReducer,
      paragraphs: paragraphsReducer

    }),
    composeEnhanchers(applyMiddleware(thunk))
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
