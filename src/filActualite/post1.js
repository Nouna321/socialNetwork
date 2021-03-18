import React ,{useEffect,useState} from 'react'

import { TiMessages } from 'react-icons/ti'
import { BiSearch } from 'react-icons/bi'
import ClickAway from './clickAway'
import { FaUserFriends } from 'react-icons'
import { useSelector } from 'react-redux'


import AffichNotif from './affichNotif'
import { Link } from 'react-router-dom'


export default function Post1() {
    const User = useSelector((state) => state.user)
    const uid = localStorage.uid;
    const userInfo= localStorage.User;
    const user=JSON.parse(userInfo)
    


    return (
        <div className='w-full h-12 bg-gray-800 flex flex-row shadow-xl   items-center  justify-center'>
            <div className='  flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                    <h1>Logo</h1>
                </div>

                <div className=' hidden sm:block sm:ml-20  mb-2'>
                    <div>
                        <div className='pt-2 relative mx-auto text-white-600'>
                            <input className='border-3 border-gray-400 bg-white h-10 px-5 pr-60 rounded-full  text-sm ' type='search' name='search' placeholder='Recherche' />
                            <button type='submit'>
                                <BiSearch className='absolute right-0 top-0 mt-5 mr-4'> </BiSearch>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' grid grid-cols-3 gap-8  text-gray-400  '>
                <div>
                    
                    <Link to='/messagerie'>
                        <TiMessages className=' text-gray-100' size={30} />
                    </Link>
                    <h3></h3>
                </div>

                {/* <div>
                    <FaUserFriends className=' text-gray-100' size={30} />
                </div> */}

                <div>
                    <AffichNotif />
                </div>
            </div>
            
                    <h3 className='text-gray-100'>{user.credentials.username}</h3>
            <div className='ml-28 mb-4'>
                <ClickAway />
            </div>
        </div>
    )
}
