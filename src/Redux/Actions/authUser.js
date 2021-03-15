import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, FORGOT_PASSWORD } from '../types'
import axios from 'axios'
import firebase from 'firebase'

export const LoginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('email')
    provider.addScope('profile')
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log('hello')
            var user = result.user
            var accessToken = result.credential.accessToken
            const name = user.displayName.split('')
            const username = name[0].concat(name[1])
            firebase
                .firestore()
                .collection('Users')
                .where('Email', '==', user.email)
                .limit(1)
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
    dispatch({ type: LOADING_UI })
    axios
        .post('/users/signIn', userData)
        .then((res) => {
            console.log('yes')
            setAuthorizationHeader(res.data.token)
            dispatch({ type: CLEAR_ERRORS })
            history.push('/filActualite')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
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
