import React from 'react'
import Post1 from './post1'
import Post2 from './post2'
import Post3 from './post3'
import Post4 from './Post4'
export default function post() {
    return (
        <div className=''>
            <Post1 />

            <div className='grid grid-cols-5'>
                <div className=''>
                    <Post2 />
                </div>
                <div className='col-span-3'>
                    <Post3 />
                </div>
                <div className=' '>
                    <Post4 />
                </div>
            </div>
        </div>
    )
}
