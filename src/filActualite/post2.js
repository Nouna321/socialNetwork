import React from 'react'
import { MdPages } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { BsBookmarkFill } from 'react-icons/bs'
import { GiBookshelf } from 'react-icons/gi'
import { MdEventAvailable } from 'react-icons/md'

import { Link } from 'react-router-dom'

export default function post2() {
    return (
        <div className='flex flex-col overflow-y-auto h-full bg-white w-full border-r-2 border-gray-200 shadow-xl'>
            <div className='border-transparent rounded-lg shadow-inner  text-l  font-semibold mx-auto mt-6 bg-gray-50 px-4 py-4'>
                <span className=' text-gray-800 '>@Nom Complet</span>
            </div>
            <ul className='relative  list-none h-full mt-6'>
                <div className='   flex relative p-4 border-l-4 border-blue-700 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                    <div className='mr-4 my-auto text-blue-700'>
                        <MdPages size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-800 flex-auto my-1'>
                        <span>
                            <Link to={'/pages'}>Pages</Link>
                        </span>
                    </div>
                </div>

                <div className='flex relative  p-4 border-l-4 border-blue-700 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                    <div className='mr-4 my-auto text-blue-700'>
                        <FaUsers size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-800 flex-auto my-1'>
                        <span>
                            <Link to={'/club'}>Mes Clubs</Link>
                        </span>
                    </div>
                </div>

                <div className='flex relative p-4 border-l-4 border-blue-700 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                    <div className='mr-4 my-auto text-blue-700'>
                        <BsBookmarkFill size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-800  flex-auto my-1'>
                        <span>
                            <Link to={'/ofrreE'}>Offre d'Emploi</Link>
                        </span>
                    </div>
                </div>

                <div className='flex relative  p-4 border-l-4 border-blue-700 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                    <div className='mr-4 my-auto text-blue-700'>
                        <GiBookshelf size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-800 flex-auto my-1'>
                        <span>
                            <Link to={'/elerning'}>E-learning</Link>
                        </span>
                    </div>
                </div>

                <div className=' flex relative p-4 border-l-4 border-blue-700 mb-4 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110'>
                    <div className='mr-4 my-auto text-blue-700'>
                        <MdEventAvailable size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-800 flex-auto my-1'>
                        <span>
                            <Link to={'/evenement'}>Evenements</Link>
                        </span>
                    </div>
                </div>
            </ul>
        </div>
    )
}
