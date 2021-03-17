import React from 'react'
import { TiMessages } from 'react-icons/ti'
import { BiSearch } from 'react-icons/bi'
import ClickAway from './clickAway'
import AffichInvit from './affichInvit'
import AffichNotif from './affichNotif'
import { Link } from 'react-router-dom'
export default function post1() {
    return (
        <div className='w-full h-12 bg-blue-800 flex flex-row shadow-xl   items-center  justify-center'>
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

            <div className='absolute inset-y-0 right-0 flex items-center pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <nav className='mr-14 flex flex-row-3  p-1 w-plein rounded-full text-gray-400  focus:outline-none'>
                    <span className='sr-only'>View notifications</span>

                    <button className='ml-24 mr-12 w-14 px-3 '>
                        <Link to='/messagerie'>
                            <TiMessages className=' text-gray-100' size={35} />
                        </Link>
                    </button>
                    <AffichInvit />
                    <AffichNotif />
                </nav>
            </div>
            <div className='ml-28 mb-4'>
                <ClickAway />
            </div>
        </div>
    )
}
