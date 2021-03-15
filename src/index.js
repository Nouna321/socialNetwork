import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import firebase from 'firebase'

import reportWebVitals from './reportWebVitals'

const firebaseConfig = {
    apiKey: 'AIzaSyBcqeSuB597caBtPUdC0uzYf0-Xpu0xErw',
    authDomain: 'bddsocialnetwork.firebaseapp.com',
    projectId: 'bddsocialnetwork',
    storageBucket: 'bddsocialnetwork.appspot.com',
    messagingSenderId: '1053211324822',
    appId: '1:1053211324822:web:db11d9200a7b1765632db7',
    measurementId: 'G-7L4XG2BW39',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
