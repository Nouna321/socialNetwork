import React from 'react'
import { FaUserFriends } from 'react-icons/fa'

export default function AffichInvit() {
    return (
        <div>
            <button className='mr-12 w-14 px-3 '>
                <a href='#' className='px-3 py-2  '>
                    <FaUserFriends className=' text-gray-100' size={35} />
                </a>
            </button>
        </div>
    )
}
