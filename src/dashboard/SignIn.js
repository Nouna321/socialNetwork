import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { LoginWithGoogle } from '../Redux/Actions/authUser'
import useSignIn from './useSignIn'
import validation2 from './validation2'
import logo from '../img/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

//redux
import { loginUser } from '../Redux/Actions/authUser'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

export default function Signin({ loginForm }) {
    const { errors } = useSignIn(loginForm, validation2)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentUser, setCurrentUser] = useState(null)

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            email: email,
            password: password,
        }

        loginUser(user, history, dispatch)
    }

    const signGoogle = (e) => {
        e.preventDefault()
        LoginWithGoogle()
    }

    // useEffect(() => {
    //     firebase.auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({ currentUser: user })
    //         } else {
    //             this.setState({ currentUser: false })
    //         }
    //     })
    // })

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className=' bg-gray-300 p-4 rounded-lg  shadow-xl'>
                <div className='grid grid-cols-2 gap-4 text-gray-800  '>
                    <div className=' flex flex-col  items-center pt-16 pl-4 border-r-4 '>
                        <img src={logo} alt='' width='300px' />
                        <ul className='text-gray-600 font-mono text-2xl mx-auto pt-12 pl-2'>
                            <li className='flex justify-center items-center '>Entrée vos identifiants,</li>
                            <li className=''> et que l'éxpérience commence !</li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center '>
                        <form>
                            <div className='flex items-center justify-center text-5xl  pb-12'>
                                <h1> Connectez-vous </h1>
                            </div>

                            <div className='p-4'>
                                <input
                                    className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 '
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='admin@admin.co'
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                {errors.email && <p className='text-red-500'>{errors.email}</p>}
                            </div>
                            <div className='p-4'>
                                <input
                                    className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                    type='password'
                                    name='password'
                                    id='password'
                                    placeholder='mot de passe'
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                {errors.password && <p className='text-red-500'>{errors.password}</p>}
                            </div>

                            <div className='flex justify-end items-end p-4'>
                                <Link to={'/forgotPass'}>mot de passe oublier?</Link>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button onClick={onSubmit} className='p-2 w-40 bg-blue-800 hover:bg-white text-gray-100  hover:text-green-800 font-bold  rounded-lg' type='submit'>
                                    Sign in
                                </button>
                            </div>

                            <div className='p-4'>
                                <p>vous n'avez pas de compte?</p>
                                <ul>
                                    <li>
                                        <Link to={'/signup'}>cree un compte</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex space-x-4 justify-center items-center'>
                                <div className='flex space-x-4 justify-center items-center border border-blue-400 p-2 rounded-lg'>
                                    <FcGoogle size={20} />
                                    <button onClick={signGoogle} className='text-blue-400  '>
                                        <span>Google</span>
                                    </button>
                                </div>
                                <div className='flex space-x-4 text-blue-400 justify-center items-center border  border-blue-400 p-2 rounded-lg'>
                                    <FaFacebook size={20} />
                                    <button className='text-blue-400 '>
                                        <span>Facebook</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
