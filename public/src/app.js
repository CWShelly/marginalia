import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startSetBooks } from './actions/books';
import { startSetNotes} from './actions/notes';
import { startSetSummaries } from './actions/chapterSummary';
import { startSetProfiles } from './actions/profiles';
import { getUsers } from './actions/users';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import getVisibleBooks from './selectors/books';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
const store = configureStore();


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
    localStorage.setItem('browse_id', user.uid)

    console.log(localStorage.getItem('auth_id') === localStorage.getItem('browse_id'));



    store.dispatch(startSetNotes());
    store.dispatch(startSetSummaries());
    store.dispatch(startSetProfiles());

    store.dispatch(getUsers())

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
