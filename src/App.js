import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import dashboard from './dashboard/dash'
import Signin from './dashboard/SignIn'
import Signup from './dashboard/Form'
import filActualite from './filActualite/filActualite'
import iterfaceUser from './interfaceUser/interfaceUser'
import messagerie from './messagerie/messagerie'
import profilUser from './profilUser/profilUser'
import ForgotPass from './dashboard/ForgotPass'

//redux
import { Provider } from 'react-redux'
import store from './Redux/store/store'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path='/' exact component={dashboard} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/filActualite' component={filActualite} />
                    <Route path='/iterfaceUser' component={iterfaceUser} />
                    <Route path='/messagerie' component={messagerie} />
                    <Route path='/profilUser' component={profilUser} />
                    <Route path='/forgotPass' component={ForgotPass} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
