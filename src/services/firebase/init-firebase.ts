import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBI08GTJx9u1oBaQ7Zqe3udkGqM_OSUlic',
  authDomain: 'board-prok.firebaseapp.com',
  projectId: 'board-prok',
  storageBucket: 'board-prok.appspot.com',
  messagingSenderId: '632118778164',
  appId: '1:632118778164:web:13864d44e184246493ed61',
  measurementId: 'G-57P4ZBVJBK'
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

// TODO: rewrite
firebase.auth().signInAnonymously()

export const db = firebase.firestore()
