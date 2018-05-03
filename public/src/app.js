import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetBooks } from './actions/books';
import { startSetNotes} from './actions/notes';
import configureStore from './store/configureStore';
import getVisibleBooks from './selectors/books';
import getVisibleNotes from './selectors/notes'
import AppRouter from './routers/AppRouter';
import './firebase/firebase';


const store = configureStore();



const state = store.getState();

const visibleBooks = getVisibleBooks(state.books)


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
// ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetBooks()).then(
  () => {
  store.dispatch(startSetNotes())
  })
.then(() => {
  console.log('set the notes');

    ReactDOM.render(jsx, document.getElementById('app'));
})
