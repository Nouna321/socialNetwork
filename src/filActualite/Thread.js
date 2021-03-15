import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../Redux/Actions/postAction'
import Publication from './publication'

export default function Thread() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)

    useEffect(() => {
        getPosts(dispatch, 'sAukMw2JDFBud0KV47KI')
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
