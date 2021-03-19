import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../Redux/Actions/postAction'
import { getUserData } from '../Redux/Actions/authUser'
import Publication from './publication'

export default function Thread() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const user=useSelector((state) => state.user)
    
        
    

   

    return (
        <div className=''>
            <ul>
                {data.posts.length>0 ?
                data.posts.map((post) => {
                    return <Publication post={post} key={post.postId} />
                }):null}
            </ul>
        </div>
    )
}
