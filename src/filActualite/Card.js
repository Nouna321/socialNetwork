import React from 'react'

export default function Card(props) {
    return (
        <div className='border border-yellow-800 w-48'>
            <h2>{props.post.username}</h2>
            <h4>{props.post.createdAt}</h4>
            <h1>{props.post.body}</h1>
        </div>
    )
}
