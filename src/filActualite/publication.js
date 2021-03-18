import React, { useState } from 'react'
import { FaComments } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { FaTrashAlt } from 'react-icons/fa'
import Comments from './comments'
import moment from 'moment'
moment().format()

export default function Publication(props) {
    const [showComments, setShowComments] = useState(false)
    console.log(showComments)
    console.log(props.post.comments)
    return (
        <div className='pt-12 '>
            <div className='grid grid-rows bg-gray-200 shadow-lg rounded-lg  md:mx-auto  max-w-md md:max-w-2xl px-4 py-4'>
                <div className='flex '>
                    <small className=' text-sm text-gray-500 mx-auto'>{moment(props.post.createdAt).startOf('hour').fromNow()}</small>
                    <FaTrashAlt className='flex justify-end' size={20} />
                </div>
                <div className='flex flex-row'>
                    <img
                        className='w-12 h-12 rounded-full object-cover mr-4 shadow'
                        src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        alt='avatar'
                    />
                    <div className='flex '>
                        <h2 className='text-lg font-semibold text-gray-900 -mt-1'>{props.post.username} </h2>
                    </div>
                </div>
                <div>
                    <p className=' pl-16   text-lg font-semibold'>{props.post.body}</p>{' '}
                </div>
                <div className=''>
                    <div className='mt-4 flex items-center'>
                        <div className='flex  text-red-900 text-sm mr-3'>
                            <FcLike size={25} />
                            <span className='flex items-end pl-2'>0</span>
                        </div>
                        <div className='flex  text-gray-700 text-sm mr-8'>
                            <FaComments
                                size={25}
                                onClick={() => {
                                    setShowComments(!showComments)
                                }}
                            />

                            <span className='flex items-end pl-2'>{props.post.commentCount}</span>
                        </div>
                    </div>
                </div>
            </div>
            {showComments && <Comments comments={props.post.comments} postId={props.post.postId} />}
        </div>
    )
}
