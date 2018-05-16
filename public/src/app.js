import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetBooks } from './actions/books';
import { startSetNotes} from './actions/notes';
import { startSetChapters} from './actions/chapters';
import { startSetPages} from './actions/pages';
import { login, logout } from './actions/auth';
import { startSetParagraphs} from './actions/paragraphs';
import configureStore from './store/configureStore';
import getVisibleBooks from './selectors/books';
// import getVisibleNotes from './selectors/notes'
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';

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

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
  }

}
// ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(

     <div className="login-image">

        <p>Marginalia Geek</p>
        <p>Loading...</p>

     </div>, document.getElementById('app'));


 

firebase.auth().onAuthStateChanged((user) => {
if(user){

  store.dispatch(login(user.uid));

    console.log('log in');
    // console.log('uid = ', user.uid);
    // localStorage.setItem('user_id', user.uid)


    store.dispatch(startSetChapters())
    store.dispatch(startSetPages())
    store.dispatch(startSetParagraphs())

    store.dispatch(startSetBooks())
     .then(() => {
       renderApp();
       if(history.location.pathname === '/'){
         history.push('/dashboard')
       }
    })


}else{
  store.dispatch(logout())
    console.log('log out');

    renderApp();
    history.push('/')

}
})
