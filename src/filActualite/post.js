import React from 'react'
import Post1 from './post1'
import Post2 from './post2'
import Post3 from './post3'
import Post4 from './Post4'
export default function post() {
    return (
        <div className=''>
            <Post1 />

            <div className='flex flex-row'>
                <div className='w-2/5'>
                    <Post2 />
                </div>
                <div className='w-3/5'>
                    <Post3 />
                </div>
                <div className='w-1/5  '>
                    <Post4 />
                </div>
            </div>
        </div>
    )
}
