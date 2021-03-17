import React from 'react'
import { MdPages } from 'react-icons/md'
import { GrGroup } from 'react-icons/gr'
import { BsBookmarkFill } from 'react-icons/bs'
import { GiBookshelf } from 'react-icons/gi'
import { MdEventAvailable } from 'react-icons/md'

import { Link } from 'react-router-dom'

export default function post2() {
    return (
        <div className='flex flex-col overflow-y-auto  h-screen bg-gray-200 w-52'>
            <ul className='relative  list-none h-full mx-auto'>
                <li className='mb-12  justify-center  mx-auto   flex pt-4  '>
                    <div className=' text-4xl text-gray-50 font-semibold '>
                        <span>
                            <Link to={'/filActualite'}>StuddApp</Link>
                        </span>
                    </div>
                </li>

                <div className=' justify-center   flex relative  p-4'>
                    <div className='mr-4 my-auto text-gray-500'>
                        <MdPages size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-500 flex-auto my-1'>
                        <span>
                            <Link to={'/pages'}>Pages</Link>
                        </span>
                    </div>
                </div>

                <div className='justify-center   flex relative  p-4'>
                    <div className='mr-4 my-auto text-gray-500'>
                        <GrGroup size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-500 flex-auto my-1'>
                        <span>
                            <Link to={'/club'}>Mes Clubs</Link>
                        </span>
                    </div>
                </div>

                <div className='justify-center   flex relative p-4 '>
                    <div className='mr-4 my-auto text-gray-500'>
                        <BsBookmarkFill size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-500  flex-auto my-1'>
                        <span>
                            <Link to={'/ofrreE'}>Offre d'Emploi</Link>
                        </span>
                    </div>
                </div>

                <div className='justify-center  flex relative  p-4'>
                    <div className='mr-4 my-auto text-gray-500'>
                        <GiBookshelf size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-500 flex-auto my-1'>
                        <span>
                            <Link to={'/elerning'}>E-learning</Link>
                        </span>
                    </div>
                </div>

                <div className=' justify-center   flex relative p-4 '>
                    <div className='mr-4 my-auto text-gray-500'>
                        <MdEventAvailable size={25} />
                    </div>
                    <div className='font-semibold text-lg text-gray-500 flex-auto my-1'>
                        <span>
                            <Link to={'/evenement'}>Evenements</Link>
                        </span>
                    </div>
                </div>
            </ul>
        </div>
    )
}
