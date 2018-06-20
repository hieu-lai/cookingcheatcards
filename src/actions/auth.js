import { 
  firebase, 
  googleAuthProvider, 
  facebookAuthProvider 
} from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (authProvider) => {
  return () => {
    if (authProvider === 'google') {
      return firebase.auth().signInWithPopup(googleAuthProvider);
    } else if ( authProvider === 'facebook') {
      return firebase.auth().signInWithPopup(facebookAuthProvider);
    }    
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
