// Get a RTDB instance
import firebase from 'firebase/compat/app'
// import 'firebase/compat/database'

export const db = firebase
    .initializeApp({ databaseURL: 'https://fish-market-app-52bb0-default-rtdb.firebaseio.com/' })
    .database()
