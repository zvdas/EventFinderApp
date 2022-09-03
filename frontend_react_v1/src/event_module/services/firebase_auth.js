import app from '../../firebase-config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

class AuthServices{
  signup(user) {
    return createUserWithEmailAndPassword(auth, user.user.email, user.user.password)
      .then(response => ({user: response.user}))
      .catch(error => ({errorCode: error.code, errorMessage: error.message}));
  }
  login(user) {
    return signInWithEmailAndPassword(auth, user.user.email, user.user.password)
      .then(response => ({user: response.user}))
      .catch(error => ({errorCode: error.code, errorMessage: error.message}));
  }
  logout() {
    signOut(auth)
      .then(() => console.log('User logged out'))
      .catch((err) => console.log(err));
  }
}

export default new AuthServices();