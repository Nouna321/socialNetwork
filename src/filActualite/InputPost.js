import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitPost } from '../Redux/Actions/postAction'

export default function InputPost() {
    const [username, setUserName] = useState('')
    const [body, setBody] = useState('')
    //   const data = useSelector((state) => state.data)
    const dispatch = useDispatch()

    function onCreatePost(e) {
        e.preventDefault()
        const post = {
            username,
            body,
        }
        submitPost(post, dispatch)
    }

    return (
        <div className='border border-pink-600 w-full'>
            <input type='text' name='publication' placeholder='username' onChange={(e) => setUserName(e.target.value)} value={username} />
            <input type='text' name='publication' placeholder='publier qlq chose' onChange={(e) => setBody(e.target.value)} value={body} />
            <button className='w-24' type='submit' name='submit' onClick={onCreatePost}>
                publier
            </button>
        </div>
    )
}
