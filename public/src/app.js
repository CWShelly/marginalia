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

store.dispatch(addNote(
  {chapter_number: 3,
    page_number:5,
   paragraph_number:9,
    note: 'this is a note',
    createdAt: 10000}
  )

  )


const state = store.getState();

console.log(state);


const visibleBooks = getVisibleBooks(state.books)
const visibleNotes = getVisibleNotes(state.notes)
// const visibleNotes = getVisibleNotes(  {chapter_number: 3,
//     page_number:5,
//    paragraph_number:9,
//     note: 'this is a note',
//     createdAt: 10000})

console.log(visibleNotes);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
