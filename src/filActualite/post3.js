import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitPost } from '../Redux/Actions/postAction'
import { FaSearch } from 'react-icons/fa'
import { FaPhotoVideo } from 'react-icons/fa'
import { BsCardText } from 'react-icons/bs'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { FiLink } from 'react-icons/fi'
import TextField from '@material-ui/core/TextField'
import Thread from './Thread'
import { UploadImagePost } from '../Redux/Actions/dataAction'
import { Divider } from '@material-ui/core'

export default function Post3() {
    const [username, setUserName] = useState('')
    const [body, setBody] = useState('')
    const data = useSelector((state) => state.data)
    const user = useSelector((state) => state.user)
    const [uploading, setUploading] = useState(false)
    const [image, setImage] = useState('')

    console.log(image)

    const dispatch = useDispatch()
    // console.log(user)

    function onCreatePost(e) {
        e.preventDefault()

        const post = {
            body,
            image: data.image != '' ? data.image : '',
        }
        submitPost(post, user, dispatch)
    }

    const onUpload = (e) => {
        const files = Array.from(e.target.files)
        setUploading(true)

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })
        UploadImagePost(dispatch, formData)
    }
    const removeImage = (id) => {
        setImage({
            image: image.filter((image) => image.public_id !== id),
        })
    }

    const { upload, images } = { uploading, image }

    return (
        <div className='flex flex-col   bg-gray-200 w-full h-full'>
            <div className='border-transparent rounded-md shadow-md bg-white mx-auto mt-4 p-6  '>
                <div className=''>
                    <div>
                        <TextField className='rounded-full w-full' label='Exprimez vous' onChange={(e) => setBody(e.target.value)} value={body} />
                    </div>
                </div>
                <div className=' flex justify-center '> {data.image != '' ? <img src={data.image} width='200PX' height='200px' /> : null}</div>

                <div className='  flex flex-row mt-2'>
                    <button
                        onClick={onCreatePost}
                        className=' bg-gradient-to-r from-pink-400 via-pink-600 to-pink-800 hover:bg-white text-white hover:text-gray-200 font-bold  px-4  inline-flex items-center rounded-full'
                        type='submit'
                        name='submit'>
                        <BsCardText className='text-white h-5 w-5 '></BsCardText>
                        <span>Text</span>
                    </button>
                    <div>
                        <input onChange={onUpload} type='file' />
                        <button className='ml-2 bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800  text-white font-bold px-4 rounded-full inline-flex items-center'>
                            <FaPhotoVideo className='text-white h-5 w-5 '></FaPhotoVideo>
                            <span>Photo</span>
                        </button>
                    </div>

                    <button className='ml-2 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800  text-white font-bold  px-4 rounded-full inline-flex items-center'>
                        <HiOutlineEmojiHappy className='text-white h-5 w-5 '></HiOutlineEmojiHappy>
                        <span>Emoji</span>
                    </button>

                    <button className='ml-2 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white font-bold  px-4 rounded-full inline-flex items-center'>
                        <FiLink className='text-white h-5 w-5'></FiLink>
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
