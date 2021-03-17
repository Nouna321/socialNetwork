

import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, FORGOT_PASSWORD, LOADING_USER } from '../types'

import axios from 'axios'
import { auth } from '../../init'
import firebase from 'firebase'
const { fire } = require("../../init");

export const LoginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('email')
    provider.addScope('profile')
    fire
                .firestore()
                .collection('Users')
                .where("Email", "==", "sevenzhunter@gmail.com")
                .get()
                .then((snapshot) => {
                    console.log(snapshot.size)
                    console.log(snapshot)}
                    )
                    .catch((e) => {
                        console.log(e)
                    })
    fire
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log('hello')
            var user = result.user
            var accessToken = result.credential.accessToken
            const name = user.displayName.split(' ')
            
            const username = name[0].concat(name[1])
           
            fire
                .firestore()
                .collection('Users')
                .where("Email", "==", "sevenzhunter@gmail.com")
                .get()
                .then((snapshot) => {
                    console.log(snapshot.size)
                    const newuser = {
                        userId: user.uid,
                        email: user.email,
                        firestname: name[0],
                        lastname: name[1],
                        username: username,
                        createdAt: new Date().toISOString(),
                        imageUrl: null,
                        bio: null,
                        website: null,
                        location: user.hometown,
                    }
                    if (snapshot.size > 0) {
                        snapshot.forEach((doc) => {
                            const id = doc.id
                            firebase.firestore().collection('Users').doc(id).update(newuser)
                        })
                    } else {
                       
                        
                        firebase.firestore().collection('Users').doc(username).set(newuser)
                    }
                })
                .then(() => {
                    return accessToken
                })
                .catch((error) => {
                    var errorCode = error.code
                    var errorMessage = error.message
                    var email = error.email
                    var credential = error.credential
                    return error
                })
        })
}

export const signUpUser = (userData, history, dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/users/signUp', userData)
        .then((res) => {
            dispatch({ type: CLEAR_ERRORS })
            history.push('/signin')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        })
}

export const loginUser = (userData, history, dispatch) => {

    dispatch({ type: LOADING_USER })
    auth.signInWithEmailAndPassword(userData.email, userData.password)
        .then((data) => {
            dispatch({
                type: SET_USER,
                payload: data,
            })
            history.push('/filActualite')
        })
        .catch((e) => {
            console.error(e)
            dispatch({ type: SET_ERRORS, payload: e.data })
        })
}

// export const loginGoogle = (data) => (dispatch) => {
//     axios
//         .post('/signGoogle', data)
//         .then((res) => {
//             // setAuthorizationHeader(res.data.token);
//             dispatch({ type: CLEAR_ERRORS })
//         })
//         .catch((err) => {
//             dispatch({
//                 type: SET_ERRORS,
//                 payload: err.response.data,
//             })
//         })
// }

export const getUserData =(dispatch) => {
    dispatch({ type: LOADING_USER });
    console.log("here")
    axios
      .get('/users/getAuthenticatedUser')
      .then((res) => {
        dispatch({
          type: SET_USER,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };

export const forgotPassword = (userData, history, dispatch) => {
    dispatch({ type: FORGOT_PASSWORD })
    axios
        .post('/users/forgotPassword', userData)
        .then((res) => {
            console.log('yes')
            setAuthorizationHeader(res.data.token)
            dispatch({ type: CLEAR_ERRORS })
            // history.push('/')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem('FBIdToken', FBIdToken)
    axios.defaults.headers.common['Authorization'] = FBIdToken
}
