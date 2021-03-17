import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitPost } from '../Redux/Actions/postAction'
import { FaSearch } from 'react-icons/fa'
import { FaPhotoVideo } from 'react-icons/fa'
import { BsCardText } from 'react-icons/bs'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { FiLink } from 'react-icons/fi'
import TextField from '@material-ui/core/TextField'
import Thread from './Thread'

export default function Post3() {
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
        <div className='flex flex-col   mt-4 '>
            <div>
                <div className=' '>
                    {/* <input type='text' name='username' onChange={(e) => setUserName(e.target.value)} value={username} /> */}
                    <TextField className='w-96 rounded-full' label='Publier' onChange={(e) => setBody(e.target.value)} value={body} />
                    <button onClick={onCreatePost} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-18' type='submit' name='submit'>
                        Publier
                    </button>
                </div>

                <div className='  flex flex-row '>
                    <button className=' bg-green-light  text-gray-500 font-bold  px-6  inline-flex items-center rounded-full'>
                        <BsCardText className='text-gray-500 h-5 w-5 mr-2'></BsCardText>
                        <span>Text</span>
                    </button>
                    <button className='   bg-green-light  text-gray-500 font-bold py-2 px-6 rounded-full inline-flex items-center'>
                        <FaPhotoVideo className='text-gray-500 h-5 w-5 mr-2'></FaPhotoVideo>
                        <span>Photo</span>
                    </button>

                    <button className=' bg-green-light  text-gray-500 font-bold py-2 px-6 rounded-full inline-flex items-center'>
                        <HiOutlineEmojiHappy className='text-gray-500 h-5 w-5 mr-2'></HiOutlineEmojiHappy>
                        <span>Emoji</span>
                    </button>

                    <button className='  bg-green-light text-gray-500 font-bold py-2 px-6 rounded-full inline-flex items-center'>
                        <FiLink className='text-gray-500 h-5 w-5 mr-2'></FiLink>
                        <span>Lien</span>
                    </button>
                    <span className=' w-screen md:w-1/3 h-10 cursor-pointer text-sm rounded-full inline-flex items-center'>
                        <button className='  m-3 mr-5 w-5 h-5'>
                            <FaSearch></FaSearch>
                        </button>
                    </span>
                </div>
            </div>

            <div className=''>
                <Thread />
            </div>
        </div>
    )
}
