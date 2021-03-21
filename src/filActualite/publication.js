import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaComments } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { TiDeleteOutline } from 'react-icons/ti'
import Comments from './comments'
import moment from 'moment'
import { getCommentOnPost,suppPost,likePost, LikeOnPost } from '../Redux/Actions/postAction'
import {getSuggestedUsers} from '../Redux/Actions/dataAction'
moment().format()

export default function Publication(props) {
    const [showComments, setShowComments] = useState(false)
    const user=useSelector((state) => state.user)
    const dispatch = useDispatch()
    const displayComments = () => {
        setShowComments(true)
        getCommentOnPost(dispatch, props.post.postId)
    }
    const suppPostUser = () => {

        suppPost(dispatch, props.post.postId)
    }
    const likePost = () => {
        let newlike={
            postId: props.post.postId,
            username:user.credentials.username
        }

        LikeOnPost(dispatch,newlike)
    }
    
    
    
    return (
        <div className='pt-8 '>
            <div className='grid grid-rows-4 bg-white shadow-lg rounded-lg  md:mx-auto  max-w-md md:max-w-2xl px-4 py-4'>
                <div className='flex flex-row'>
                    <img
                        className='w-12 h-12 rounded-full object-cover mr-4 shadow'
                        src='https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        alt='avatar'
                    />

                    <div className='flex flex-col '>
                        <h2 className='text-lg font-semibold text-gray-900 -mt-1'>{props.post.username} </h2>
                        <small className=' text-sm text-gray-500 mx-auto'>{moment(props.post.createdAt).startOf('hour').fromNow()}</small>
                    </div>
                    {user.credentials.username==props.post.username?
                    <div className='flex justify-end' onClick={suppPostUser}>
                       <TiDeleteOutline className='flex justify-end text-blue-400 ' size={25} />
                        
                    </div>:null}
                </div>

                <div>
                    <p className=' pl-16 mt-4  text-sm text-gray-800 font-semibold'>{props.post.body}</p>
                </div>

                {props.post.imageUrl != '' ? <img src={props.post.imageUrl} /> : null}
                <div className=''>
                    <div className='mt-4 flex items-center'>
                        <div onClick={() => {
                            likePost() } } className='flex  text-red-900 text-sm mr-3'>
                            <FcLike size={25} />
                            <span className='flex items-end pl-2'>like   {props.post.likeCount}</span>
                        </div>
                        <div className='flex  text-gray-700 text-sm mr-8'>
                            <FaComments size={25} onClick={displayComments} />

                            <span className='flex items-end pl-2'>Commentaires {props.post.commentCount}</span>
                        </div>
                    </div>
                </div>
            </div>
            {showComments && <Comments comments={props.post.comments} postId={props.post.postId} />}
        </div>
    )
}
