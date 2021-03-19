import React, { useEffect, useState } from 'react'

import { AiFillMessage } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import ClickAway from './clickAway'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { useSelector } from 'react-redux'

import AffichNotif from './affichNotif'
import { Link } from 'react-router-dom'
import { Divider } from '@material-ui/core'

export default function Post1() {
    const User = useSelector((state) => state.user)
    //console.log(User.credentials)
    return (
        <div className='w-full h-16 bg-white shadow-2xl  border-b-2 border-gray-200 '>
            {(User.loading != null) | true ? (
                <div className='  flex flex-row  space-x-60 sm:items-stretch sm:justify-start'>
                    <div className='flex-shrink-0 flex items-center'>
                        <h1>Logo</h1>

                        <div className=' hidden sm:block sm:ml-20  '>
                            <div>
                                <div className='pt-2 relative mx-auto text-white-600'>
                                    <input className='border-3 border-gray-400 bg-white h-12  px-24 rounded-full  text-sm ' type='search' name='search' placeholder='Recherche' />
                                    <button type='submit'>
                                        <BiSearch className='absolute right-0 top-0 mt-6 mr-2 '> </BiSearch>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-row  space-x-6 justify-center items-center text-gray-400   '>
                        <div>
                            <Link to='/messagerie'>
                                <AiFillMessage className=' text-gray-400' size={30} />
                            </Link>
                            <h3></h3>
                        </div>

                        <div>
                            <AiOutlineUsergroupAdd className=' text-gray-400' size={30} />
                        </div>

                        <div>
                            <AffichNotif />
                        </div>
                    </div>
                    <div className='flex flex-row space-x-8 justify-center items-center'>
                        <div>{User.loading == false ? <h3 className='text-gray-400'>{User.credentials.username}</h3> : null}</div>
                        <div>
                            <ClickAway />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}
