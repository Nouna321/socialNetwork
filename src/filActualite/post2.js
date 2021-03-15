import React from 'react'
import Post3 from './post3'
import { Link } from 'react-router-dom'

export default function post2() {
    return (
        <div className=' '>
            <div className='flex min-h-screen'>
                <nav className='mt-12 w-3/12 '>
                    <div className='fixed flex-auto  h-full '>
                        <div className='flex flex-col overflow-y-auto'>
                            <ul className='relative m-0 p-0 list-none h-full'>
                                <li className='mt-7 ml-5 justify-center cursor-pointer  hover:bg-gray-700 rounded-full p-4 w-56 flex relative shadow-sm border-b-4  border-light-blue-500 '>
                                    <div className='text-green-700 mr-4 flex-shrink-0 my-auto'>
                                        <svg className='fill-current w-7 h-7' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'></path>
                                        </svg>
                                    </div>
                                    <div className=' text-2xl text-green-700 font-semibold my-1'>
                                        <span>
                                            <Link to={'/filActualite'}>Profil</Link>
                                        </span>
                                    </div>
                                </li>

                                <li className='p-4 w-full flex relative shadow-sm border-b-4 border-light-blue-500 '>
                                    <div className='text-xl flex-auto my-1 '>
                                        <span className='font-medium'>Activité</span>
                                    </div>
                                </li>

                                <div className=' justify-center rounded-full border-b-4 border-light-blue-500 text-white-400  flex relative px-4 hover:bg-gray-700 cursor-pointer'>
                                    <div className='mr-4 my-auto'>
                                        <svg className='fill-current h-9 w-9' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'></path>
                                        </svg>
                                    </div>
                                    <div className='font-semibold text-lg text-green-700 flex-auto my-1'>
                                        <span>
                                            {' '}
                                            <Link to={'/pages'}>Pages</Link>
                                        </span>
                                    </div>
                                </div>

                                <div className='justify-center rounded-full border-b-4 border-light-blue-500 text-white-500 flex relative px-4 hover:bg-gray-700 cursor-pointer'>
                                    <div className='mr-4 my-auto'>
                                        <svg className='fill-current h-9 w-9' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path d='M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'></path>
                                        </svg>
                                    </div>
                                    <div className='font-semibold text-lg text-green-700 flex-auto my-1'>
                                        <span>
                                            <Link to={'/club'}>Mes Clubs</Link>{' '}
                                        </span>
                                    </div>
                                </div>

                                <div className='justify-center rounded-full border-b-4 border-light-blue-500 text-white-400 flex relative px-4 hover:bg-gray-700 cursor-pointer'>
                                    <div className='mr-4 my-auto'>
                                        <svg className='fill-current h-8 w-8' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path d='M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z'></path>
                                        </svg>{' '}
                                    </div>
                                    <div className='font-semibold text-lg text-green-700  flex-auto my-1'>
                                        <span>
                                            <Link to={'/ofrreE'}>Offre d'Emploi</Link>
                                        </span>
                                    </div>
                                </div>

                                <div className='justify-center rounded-full border-b-4 border-light-blue-500 text-white-400 flex relative px-4 hover:bg-gray-700 cursor-pointer'>
                                    <div className='mr-4 my-auto'>
                                        <svg className='fill-current h-9 w-9' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'></path>
                                        </svg>{' '}
                                    </div>
                                    <div className='font-semibold text-lg text-green-700 flex-auto my-1'>
                                        <span>
                                            <Link to={'/elerning'}>E-learning</Link>
                                        </span>
                                    </div>
                                </div>

                                <div className=' justify-center rounded-full border-b-4 border-light-blue-500 text-white-400 flex relative px-4 hover:bg-gray-700 cursor-pointer'>
                                    <div className='mr-4 my-auto'>
                                        <svg className='fill-current h-9 w-9' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path d='M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z'></path>
                                        </svg>
                                    </div>
                                    <div className='font-semibold text-lg text-green-700 flex-auto my-1'>
                                        <span>
                                            <Link to={'/evenement'}>Evenements</Link>
                                        </span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Post3 />
            </div>
        </div>
    )
}
