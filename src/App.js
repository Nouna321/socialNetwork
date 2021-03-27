import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'firebase/auth'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import { useDispatch, useSelector } from 'react-redux'

import firebase from 'firebase'
import { getSuggestedUsers } from './Redux/Actions/dataAction'
import './App.css'
import dashboard from './dashboard/dash'
import Signin from './dashboard/SignIn'
import Signup from './dashboard/Form'
import filActualite from './filActualite/filActualite'
import iterfaceUser from './interfaceUser/interfaceUser'
import messagerie from './messagerie/messagerie'
import profilUser from './profilUser/profilUser'
import ForgotPass from './dashboard/ForgotPass'
import Card from './filActualite/Card'
import Invitation from './filActualite/invitation'
import EditProfil from './profilUser/components/Editprofil'
import friends from './profilUser/components/friend'
<<<<<<< HEAD
import Page from './page/pageAdmin'
import creePage from './page/pages'
import formpage from './page/formpage'
=======
import AuthRoute from "./util/AuthRoute"
>>>>>>> b3fe22ce6bc12efc3c5790e4fbd096beb12e352c

const config = require('./config')

//redux

const App = () => {
    return (
        <FirebaseAuthProvider firebase={firebase} {...config}>
            {
                <Router>
                    <Switch>
                        <Route path='/' exact component={dashboard} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/signup' component={Signup} />
<<<<<<< HEAD
                        <Route path='/filActualite' component={filActualite} />
                        <Route path='/iterfaceUser' component={iterfaceUser} />
                        <Route path='/messagerie' component={messagerie} />
                        <Route path='/profilUser' component={profilUser} />
                        <Route path='/forgotPass' component={ForgotPass} />
                        <Route path='/card' component={Card} />
                        <Route path='/Invitation' component={Invitation} />
                        <Route path='/EditProfil' component={EditProfil} />
                        <Route path='/friends' component={friends} />
                        <Route path='/page' component={Page} />
                        <Route path='/creePage' component={creePage} />
                        <Route path='/formpage' component={formpage} />
=======
                        <AuthRoute path='/filActualite' component={filActualite} />
                        <AuthRoute path='/iterfaceUser' component={iterfaceUser} />
                        <AuthRoute path='/messagerie' component={messagerie} />
                        <AuthRoute path='/profilUser/:username' component={profilUser} />
                        <AuthRoute path='/forgotPass' component={ForgotPass} />
                        <AuthRoute path='/card' component={Card} />
                        <AuthRoute path='/Invitation' component={Invitation} />
                        <AuthRoute path='/EditProfil' component={EditProfil} />
                        <AuthRoute path='/friends' component={friends} />
>>>>>>> b3fe22ce6bc12efc3c5790e4fbd096beb12e352c
                    </Switch>
                </Router>
            }
        </FirebaseAuthProvider>
    )
}

export default App
