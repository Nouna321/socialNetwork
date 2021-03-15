import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { forgotPassword } from '../Redux/Actions/authUser'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

const ForgotPass = () => {
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            email: email,
        }

        forgotPassword(user, history, dispatch)
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className=' bg-gray-300 p-4 rounded-lg  shadow-xl'>
                <h2 className='font-mono text-2xl font-bold text-blue-700 pb-12'> Mot de passe oublier ! </h2>
                <form>
                    <input
                        className='w-full  pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                        type='email'
                        name='email'
                        placeholder='tappez votre email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <input onClick={onSubmit} className='' type='submit' name='button' />
                </form>
            </div>
        </div>
    )
}

export default ForgotPass
