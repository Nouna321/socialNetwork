import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commentOnPost } from '../Redux/Actions/postAction'

export default function Comments(props) {
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const postId = props.postId
    const comments=props.comments
    console.log(typeof(comments))

    function onCreateComment(e) {
        e.preventDefault()
        const comment = {
            postId,
            body,
        }
        commentOnPost(dispatch, comment)
    }

    return (
        <div>
            <div className='md:mx-auto  max-w-md md:max-w-2xl'>
                <input type='hidden' />
                <input
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    type='text'
                    className='h-8 w-4/5   rounded-lg focus:shadow-outline text-l'
                    placeholder='Ask questions here.'
                    id='comment_content'
                />

                <button onClick={onCreateComment} className='font-bold ml-2 py-1 px-2 bg-blue-400 text-l text-white shadow-md rounded-lg '>
                    Comment
                </button>
            </div>
            <div />
            {typeof(comments) != "undefined"?
            
            
            comments.map((comment) => {
                return (
                    <div id='task-comments' className=' border-b-2'>
                        <div className='bg-white rounded-lg   flex flex-col justify-center items-center md:items-start  '>
                            <div className='flex flex-row justify-center mr-2'>
                                <img
                                    alt='avatar'
                                    width='48'
                                    height='48'
                                    className='rounded-full w-6 h-6 mr-4 shadow-lg '
                                    src='https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png'
                                />
                                <h3 className='text-blue-600 font-semibold text-l text-center md:text-left '>@{comment.username}</h3>
                            </div>

                            <p className='text-gray-600 text-l pl-12 py-2 md:text-left '>{comment.body}.</p>
                        </div>
                    </div>
                )
            })
        :null}
        </div>
    )
}
