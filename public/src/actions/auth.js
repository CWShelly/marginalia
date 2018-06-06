
import database, { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid)=>({
  type: 'LOGIN',
  uid
})

export const startLogin =()=>{
 
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);

  }
}

export const logout = ()=>({
  type: 'LOGOUT'
})
export const startLogout = () => {

  let auth_id = localStorage.getItem('auth_id')

  return()=>{
 console.log(localStorage.getItem('auth_id') === localStorage.getItem('browse_id'));

    return firebase.auth().signOut()
  }
}
