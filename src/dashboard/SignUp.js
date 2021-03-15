import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSignUp from './useSignUp'
import validation from './validation'
import logo from '../img/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
//redux
import { signUpUser } from '../Redux/Actions/authUser'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const SignUp = ({ submitForm }) => {
    const { errors } = useSignUp(submitForm, validation)
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }

        signUpUser(user, history, dispatch)
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='bg-gray-300 p-4 rounded-lg  shadow-xl '>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <div className='flex justify-center items-center text-gray-100 text-4xl'>
                            <h2 className='pb-12 text-gray-400'> Authentifiez-vous</h2>
                        </div>
                        <div>
                            <div className='grid grid-cols-2 space-x-4'>
                                <div className='flex space-x-4 justify-center items-center border border-blue-400 p-2 rounded-lg'>
                                    <FcGoogle size={20} />
                                    <button className='text-blue-400  '>
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
                        </div>
                        <form>
                            <div className=' p-8 flex items-center justify-center text-gray-400 text-2xl '>Entrer vos identifiant</div>

                            <div className='grid grid-rows-2 gap-4 text-gray-300'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='p-4'>
                                        <input
                                            className='w-full p-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='firstN'
                                            type='firstN'
                                            name='firstN'
                                            placeholder='Nom'
                                            onChange={(e) => {
                                                setFirstName(e.target.value)
                                            }}
                                        />
                                        {errors.firstN && <p className='text-red-500'>{errors.firstN}</p>}
                                    </div>

                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='lastN'
                                            type='lastN'
                                            name='lastN'
                                            placeholder='Prénom'
                                            onChange={(e) => {
                                                setLastName(e.target.value)
                                            }}
                                        />
                                        {errors.lastN && <p className='text-red-500'>{errors.lastN}</p>}
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='email'
                                            type='email'
                                            name='email'
                                            placeholder='email'
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                        {errors.email && <p className='text-red-500'>{errors.email}</p>}
                                    </div>
                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='pseudo'
                                            type='pseudo'
                                            name='pseudo'
                                            placeholder='pseudo'
                                            onChange={(e) => {
                                                setUsername(e.target.value)
                                            }}
                                        />
                                        {errors.email && <p className='text-red-500'>{errors.email}</p>}
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='password'
                                            type='password'
                                            name='password'
                                            placeholder='Mot de passe'
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                        {errors.password && <p className='text-red-500'>{errors.password}</p>}
                                    </div>
                                    <div className='p-4'>
                                        <input
                                            className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                                            id='password2'
                                            type='password'
                                            name='password2'
                                            placeholder='Confirmez votre mot de passe'
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value)
                                            }}
                                        />
                                        {errors.password2 && <p className='text-red-500'>{errors.password2}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='p-4 flex flex-row-reverse place-items-end'>
                                <button onClick={onSubmit} className='bg-blue-800 hover:bg-white text-gray-100  hover:text-blue-800 font-bold py-2 px-8 rounded-lg' type='submit'>
                                    sign Up
                                </button>
                                <ul>
                                    <li className='p-4 text-gray-600 font-sans'>
                                        <Link to={'/signin'}> Avez vous deja un compte</Link>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className=' flex flex-col  items-center justify-center border-l-4 '>
                        <img src={logo} alt='' width='300px' />
                        <ul className='text-gray-600 font-mono text-xl flex flex-col justify-center items-center pt-12 pl-2'>
                            <li className=''>Vous etes sur le point de vivre une experience</li>
                            <li> exceptionnelle ,</li>
                            <li className=''> d'abord authentifiez vous!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
