import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../Redux/Actions/postAction'
import { getUserData } from '../Redux/Actions/authUser'
import Publication from './publication'

export default function Thread() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const uid= localStorage.uid;
    const userInfo= localStorage.User;
    const user=JSON.parse(userInfo)

    useEffect(() => {
        getUserData(dispatch,uid)
        getPosts(dispatch,user.credentials.username)
        console.log(data)
    }, [])

    return (
        <div className=''>
            <ul>
                {data.posts.map((post) => {
                    return <Publication post={post} key={post.postId} />
                })}
            </ul>
        </div>
    )
}
