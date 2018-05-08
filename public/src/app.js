import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetBooks } from './actions/books';
import { startSetNotes} from './actions/notes';
import { startSetChapters} from './actions/chapters';
import { startSetPages} from './actions/pages';
import { startSetParagraphs} from './actions/paragraphs';
import configureStore from './store/configureStore';
import getVisibleBooks from './selectors/books';
// import getVisibleNotes from './selectors/notes'
import AppRouter from './routers/AppRouter';
import './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
const store = configureStore();



// const state = store.getState();

// const visibleBooks = getVisibleBooks(state.books)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
// ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

// store.dispatch(startSetNotes())

store.dispatch(startSetChapters())
store.dispatch(startSetPages())
store.dispatch(startSetParagraphs())

store.dispatch(startSetBooks())
 .then(() => {
     ReactDOM.render(jsx, document.getElementById('app'));
})
